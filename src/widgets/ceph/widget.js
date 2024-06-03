import cephProxyHandler from "./proxy";

const widget = {
  proxyHandler: cephProxyHandler,
  api: "{url}/api/{endpoint}",  

  mappings: {
    hosts: {
      endpoint: "ceph/proxy-hosts",
    },
  },
};

export default widget;
