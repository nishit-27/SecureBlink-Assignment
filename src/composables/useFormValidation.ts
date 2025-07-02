import { ref, computed, reactive } from 'vue'

export interface ValidationRule {
  required?: boolean
  email?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: string) => string | null
}

export interface FieldConfig {
  [key: string]: ValidationRule
}

export function useFormValidation<T extends Record<string, any>>(
  initialData: T,
  rules: FieldConfig
) {
  const formData = reactive<T>({ ...initialData })
  const errors = ref<Record<string, string>>({})
  const touched = ref<Record<string, boolean>>({})

  const validateField = (fieldName: string, value: string): string | null => {
    const rule = rules[fieldName]
    if (!rule) return null

    if (rule.required && (!value || value.trim() === '')) {
      return `${fieldName} is required`
    }

    if (rule.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address'
    }

    if (rule.minLength && value && value.length < rule.minLength) {
      return `${fieldName} must be at least ${rule.minLength} characters`
    }

    if (rule.maxLength && value && value.length > rule.maxLength) {
      return `${fieldName} must be no more than ${rule.maxLength} characters`
    }

    if (rule.pattern && value && !rule.pattern.test(value)) {
      return `${fieldName} format is invalid`
    }

    if (rule.custom && value) {
      return rule.custom(value)
    }

    return null
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    Object.keys(rules).forEach(fieldName => {
      const error = validateField(fieldName, formData[fieldName] || '')
      if (error) {
        newErrors[fieldName] = error
      }
    })

    errors.value = newErrors
    return Object.keys(newErrors).length === 0
  }

  const validateSingle = (fieldName: string) => {
    const error = validateField(fieldName, formData[fieldName] || '')
    if (error) {
      errors.value[fieldName] = error
    } else {
      delete errors.value[fieldName]
    }
    touched.value[fieldName] = true
  }

  const reset = () => {
    Object.keys(formData).forEach(key => {
      formData[key] = initialData[key]
    })
    errors.value = {}
    touched.value = {}
  }

  const isValid = computed(() => Object.keys(errors.value).length === 0)

  return {
    formData,
    errors,
    touched,
    isValid,
    validate,
    validateSingle,
    reset
  }
}