import Vue from "vue";
import Vuex, { ModuleTree, Module } from "vuex";

function getModules() {
  const modules = import.meta.globEager("./modules/*.ts");
  return modules;
}

interface FileModule {
  default: object;
}

const requireModules = getModules();
const modules: ModuleTree<Module<unknown, unknown>> = {};
Object.keys(requireModules).forEach((key: string) => {
  const moduleName = key.replace(/^\.\/.*\/(.*)\.\w+$/, "$1");
  const module = requireModules[key] as FileModule;
  const storeModule = module.default || module;
  modules[moduleName] = { ...storeModule, namespaced: true };
});

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
});

export default store;
export const useStore = () => store;
