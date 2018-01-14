/**
 * apis地址
 * @author mulberry
 */

const base = 'http://localhost:7001';

export default {
  common: {
    login: `${base}/api/login`,
    logout: `${base}/api/logout`,
  },
  journals: {
    get: `${base}/api/journals`,
    post: `${base}/api/journals`,
    put: `${base}/api/journals`,
    delete: `${base}/api/journals`,
  },
  interfaces: {
    get: `${base}/api/interfaces`,
    post: `${base}/api/interfaces`,
    put: `${base}/api/interfaces`,
    delete: `${base}/api/interfaces`,
  },
  contents: {
    get: `${base}/api/contents`,
    post: `${base}/api/contents`,
    put: `${base}/api/contents`,
    delete: `${base}/api/contents`,
  },
  authority: {
    get: `${base}/api/authority`,
    post: `${base}/api/authority`,
    put: `${base}/api/authority`,
    delete: `${base}/api/authority`,
  },
  services: {
    get: `${base}/api/services`,
    post: `${base}/api/services`,
    put: `${base}/api/services`,
    delete: `${base}/api/services`,
  },
};