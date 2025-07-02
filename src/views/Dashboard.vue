<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <aside class="fixed top-0 left-0 h-full w-28 bg-white border-r flex flex-col justify-between items-center py-8 shadow-sm z-10">
      <div class="flex flex-col items-center space-y-9 w-full">
        <!-- Dashboard (active) -->
        <div class="w-full flex flex-col items-center">
          <div class="bg-white shadow-lg rounded-[4px] flex flex-col items-center py-4 w-24">
            <img :src="metrics" alt="Dashboard" class="w-8 h-8 mb-2" />
            <span class="text-blue-600 font-medium text-sm">Dashboard</span>
          </div>
        </div>
        <!-- Analytics -->
        <div class="flex flex-col items-center">
          <img :src="analytics" alt="Analytics" class="w-8 h-8 mb-2 opacity-60" />
          <span class="text-gray-400 text-sm">Analytics</span>
        </div>
        <!-- Trading -->
        <div class="flex flex-col items-center">
          <img :src="currencyExchange" alt="Trading" class="w-8 h-8 mb-2 opacity-60" />
          <span class="text-gray-400 text-sm">Trading</span>
        </div>
        <!-- Notifications -->
        <div class="flex flex-col items-center">
          <img :src="soundWave" alt="Notifications" class="w-8 h-8 mb-2 opacity-60" />
          <span class="text-gray-400 text-sm">Notifications</span>
        </div>
      </div>
      <!-- Logout at bottom -->
      <button @click="handleLogout" class="mb-2 flex flex-col items-center text-gray-400 hover:text-blue-600 focus:outline-none">
        <img :src="logout" alt="Logout" class="w-8 h-8 mb-2" />
        <span class="text-sm">Logout</span>
      </button>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 ml-24 p-8">
      <div class="max-w-7xl mx-auto px-12">
        <!-- Top Section -->
        <div class="flex justify-between items-center mb-10">
          <div>
            <h1 class="text-4xl font-inter text-gray-900 mb-2">Dashboard</h1>
            <p class="text-gray-400 text-lg">Welcome back, {{ user?.name || 'User' }}</p>
          </div>
          <div class="flex items-center space-x-6">
            <button class="bg-[#0F77FA] text-white px-7 py-3 rounded-[4px] font-medium shadow hover:bg-blue-700 flex items-center text-lg">
              <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Add Unit
            </button>
            <div class="flex items-center space-x-3">
              <img :src="user?.avatar || 'https://randomuser.me/api/portraits/men/32.jpg'" class="w-12 h-12 rounded-full shadow" />
              <span class="text-gray-400 text-lg font-medium">{{ user?.name || 'User' }}</span>
            </div>
          </div>
        </div>

        <!-- Summary Cards -->
        <div class="flex justify-between items-center py-6 mb-10 w-full">
          <!-- BALANCE -->
          <div class="flex-1 flex flex-col items-start">
            <span class="text-xs tracking-widest text-gray-400 mb-2">BALANCE</span>
            <span class="text-3xl font-inter text-gray-900">$5900.00</span>
          </div>
          <div class="h-12 border-l mx-8"></div>
          <!-- PROFITS -->
          <div class="flex-1 flex flex-col items-start">
            <span class="text-xs tracking-widest text-gray-400 mb-2">PROFITS</span>
            <span class="text-3xl font-inter text-gray-900 flex items-center">
              $950.00
              <span class="ml-3 flex items-center text-blue-500 text-base font-medium">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
                +56%
              </span>
            </span>
          </div>
          <div class="h-12 border-l mx-8"></div>
          <!-- LOSSES -->
          <div class="flex-1 flex flex-col items-start">
            <span class="text-xs tracking-widest text-gray-400 mb-2">LOSSES</span>
              <span class="text-3xl font-inter text-gray-900 flex items-center">
              $450.00
              <span class="ml-3 flex items-center text-red-500 text-base font-medium">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 12l-5 5L4 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>
                +56%
              </span>
            </span>
          </div>
          <div class="h-12 border-l mx-8"></div>
          <!-- CURRENCIES -->
          <div class="flex-1 flex flex-col items-start">
            <span class="text-xs tracking-widest text-gray-400 mb-2">CURRENCIES</span>
            <div class="flex space-x-3 mt-1">
              <img :src="bitcoin" class="w-6 h-6" alt="BTC" />
              <img :src="currencyDollar" class="w-6 h-6" alt="USD" />
              <img :src="currencyEuro" class="w-6 h-6" alt="EUR" />
              <img :src="currencyYen" class="w-6 h-6" alt="YEN" />
            </div>
          </div>
        </div>

        <!-- Country Stats -->
        <div class="bg-white  shadow p-6 flex justify-between mb-8">
          <div class="flex flex-col items-center flex-1">
            <div class="text-sm text-gray-500 mb-1">Italy</div>
            <div class="text-2xl font-bold text-gray-900 flex items-center">475 <span class="ml-1 text-green-500 text-base">▲</span></div>
            <svg class="w-20 h-6 mt-2" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 20L18 10L34 14L50 8L66 18L78 16" stroke="#2563eb" stroke-width="2" fill="none"/></svg>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="text-sm text-gray-500 mb-1">United States</div>
            <div class="text-2xl font-bold text-gray-900 flex items-center">431 <span class="ml-1 text-green-500 text-base">▲</span></div>
            <svg class="w-20 h-6 mt-2" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 20L18 10L34 14L50 8L66 18L78 16" stroke="#2563eb" stroke-width="2" fill="none"/></svg>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="text-sm text-gray-500 mb-1">Canada</div>
            <div class="text-2xl font-bold text-gray-900 flex items-center">174 <span class="ml-1 text-red-500 text-base">▼</span></div>
            <svg class="w-20 h-6 mt-2" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 20L18 16L34 18L50 14L66 10L78 12" stroke="#ef4444" stroke-width="2" fill="none"/></svg>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="text-sm text-gray-500 mb-1">Spain</div>
            <div class="text-2xl font-bold text-gray-900 flex items-center">475 <span class="ml-1 text-green-500 text-base">▲</span></div>
            <svg class="w-20 h-6 mt-2" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 20L18 10L34 14L50 8L66 18L78 16" stroke="#2563eb" stroke-width="2" fill="none"/></svg>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="text-sm text-gray-500 mb-1">Japan</div>
            <div class="text-2xl font-bold text-gray-900 flex items-center">134 <span class="ml-1 text-green-500 text-base">▲</span></div>
            <svg class="w-20 h-6 mt-2" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 20L18 18L34 20L50 16L66 12L78 14" stroke="#22c55e" stroke-width="2" fill="none"/></svg>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div class="text-sm text-gray-500 mb-1">South Africa</div>
            <div class="text-2xl font-bold text-gray-900 flex items-center">471 <span class="ml-1 text-red-500 text-base">▼</span></div>
            <svg class="w-20 h-6 mt-2" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 20L18 16L34 18L50 14L66 10L78 12" stroke="#ef4444" stroke-width="2" fill="none"/></svg>
          </div>
        </div>

        <!-- Team Members & Comparison -->
        <div class="flex gap-8">
          <!-- Team Members -->
          <div class="flex-1">
            <div class="flex justify-between items-center mb-6">
              <div class="text-2xl font-semibold text-gray-900">Team Members</div>
              <a href="#" class="text-blue-500 text-sm font-medium">View All</a>
            </div>
            <div >
              <div class="space-y-2">
                <div class="bg-white rounded-[4px] shadow flex items-center justify-between px-6 py-2">
                  <div class="flex items-center space-x-3">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" class="w-12 h-12 rounded-full" />
                    <span class="font-medium text-gray-900 text-lg">Andrew Johnston</span>
                  </div>
                  <span class="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">Top Trader</span>
                </div>
                <div class="bg-white rounded-[4px] shadow flex items-center justify-between px-6 py-2">
                  <div class="flex items-center space-x-3">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" class="w-12 h-12 rounded-full" />
                    <span class="font-medium text-gray-900 text-lg">Anna Atkinsons</span>
                  </div>
                  <span class="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">Manager</span>
                </div>
                <div class="bg-white rounded-[4px] shadow flex items-center justify-between px-6 py-2">
                  <div class="flex items-center space-x-3">
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" class="w-12 h-12 rounded-full" />
                    <span class="font-medium text-gray-900 text-lg">Mark Atkinsons</span>
                  </div>
                  <span class="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">Top Trader</span>
                </div>
                    <div class="bg-white rounded-[4px] shadow flex items-center justify-between px-6 py-2">
                  <div class="flex items-center space-x-3">
                    <img src="https://randomuser.me/api/portraits/women/46.jpg" class="w-12 h-12 rounded-full" />
                    <span class="font-medium text-gray-900 text-lg">Johanna Tairons</span>
                  </div>
                  <span class="bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">Manager</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Comparison -->
          <div class="flex-1">
            <div class="flex justify-between items-center mb-6">
              <div class="text-2xl font-semibold text-gray-900">Comparison</div>
              <a href="#" class="text-blue-500 text-sm font-medium">View All</a>
            </div>
            <div class="bg-white rounded-[4px] shadow p-6">
              <!-- Bar chart rows -->
              <div class="mb-7">
                <div class="flex justify-between mb-4">
                  <span class="flex items-center">
                    <img :src="usa" class="w-5 h-5 mr-2" />United States</span>
                  <span class="text-xs text-gray-400">93%</span>
                </div>
                <div class="h-2 bg-blue-100 rounded-full">
                  <div class="h-2 bg-blue-500 rounded-full" style="width: 93%"></div>
                </div>
              </div>
              <div class="mb-7">
                <div class="flex justify-between mb-4">
                  <span class="flex items-center">
                    <img :src="italy" class="w-5 h-5 mr-2" />Italy</span>
                  <span class="text-xs text-gray-400">73%</span>
                </div>
                <div class="h-2 bg-blue-100 rounded-full">
                  <div class="h-2 bg-blue-500 rounded-full" style="width: 73%"></div>
                </div>
              </div>
              <div class="mb-7">
                <div class="flex justify-between mb-4">
                  <span class="flex items-center">
                    <img :src="spain" class="w-5 h-5 mr-2" />Spain</span>
                  <span class="text-xs text-gray-400">13%</span>
                </div>
                <div class="h-2 bg-blue-100 rounded-full">
                  <div class="h-2 bg-blue-500 rounded-full" style="width: 13%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import metrics from '../assets/metrics.svg'
import analytics from '../assets/analytics.svg'
import currencyExchange from '../assets/currency-exchange-2.svg'
import soundWave from '../assets/sound-wave.svg'
import logout from '../assets/logout.svg'

import bitcoin from '../assets/bitcoin-2.svg'
import currencyDollar from '../assets/currency-dollar.svg'
import currencyEuro from '../assets/currency-euro.svg'
import currencyYen from '../assets/currency-yen.svg'
import italy from '../assets/italy.svg'
import usa from '../assets/usa.svg'
import spain from '../assets/spain.svg'

const authStore = useAuthStore()
const user = authStore.user
const handleLogout = () => {
  authStore.logout()
}
</script>