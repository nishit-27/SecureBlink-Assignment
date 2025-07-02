import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoading = ref(false)
  const router = useRouter()

  const isAuthenticated = computed(() => !!user.value)

  const login = async (email: string, _password: string, name?: string) => {
    isLoading.value = true
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Create user object
      const userData: User = {
        id: Date.now().toString(),
        email,
        name: name || email.split('@')[0],
        avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2`
      }
      
      user.value = userData
      localStorage.setItem('user', JSON.stringify(userData))
      
      // Redirect to dashboard
      router.push('/dashboard')
      
      return { success: true, message: 'Login successful!' }
    } catch (error) {
      return { success: false, message: 'Login failed. Please try again.' }
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
    router.push('/login')
  }

  const checkAuth = () => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      user.value = JSON.parse(storedUser)
    }
  }

  return {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout,
    checkAuth
  }
})