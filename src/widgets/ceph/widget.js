import cephProxyHandler from "./proxy";

const widget = {
  proxyHandler: cephProxyHandler,
  api: "{url}/api/",  
  auth: "{url}/api/auth",

  mappings: {
    hosts: {
      endpoint: "ceph/proxy-hosts",
    },
  },
};

export default widget;
