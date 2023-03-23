import {reactive, watchEffect} from "vue";

export const appData = reactive({
  timestamp: 0,
});

export const asyncSample = (attr: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
}
