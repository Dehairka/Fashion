import { defineStore } from 'pinia'

export const useAnimationStore = defineStore('animation', {
    state: () => ({ 
        productActive: null,
    }),
    getters: {
    //   doubleCount: (state) => state.count * 2,
    },
    actions: {
      setProductActive(product: any) {
        this.productActive = product
      },
    },
  })