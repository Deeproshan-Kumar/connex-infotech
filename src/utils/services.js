import iosIcon from "../../public/services/ios.svg";
import androidIcon from "../../public/services/android.svg";
import reactNativeIcon from "../../public/services/react-native.svg";
import flutterIcon from "../../public/services/flutter.svg";
import sunmiIcon from "../../public/services/sunmi.svg";
import webPortalIcon from "../../public/services/web-portal.svg";
import customWebDevIcon from "../../public/services/custom-web-dev.svg";
import ecommIcon from "../../public/services/e-commerce.svg";
import cmsIcon from "../../public/services/cms.svg";
import maintenanceIcon from "../../public/services/maintenance.svg";
import mobAndWebIcon from "../../public/services/mobile-web-design.svg";
import productDesignIcon from "../../public/services/product-design.svg";
import brandingIcon from "../../public/services/branding.svg";
import prototypeIcon from "../../public/services/prototype.svg";
import visualDesignIcon from "../../public/services/visual-design.svg";

const services = [
  {
    id: 1,
    service_name: "Mobile App Development",
    service_info:
      "From idea to App Store — we build fast, scalable mobile apps for iOS and Android Applications.",
    service_types: [
      {
        name: "iOS App",
        icon: iosIcon,
      },
      {
        name: "Android App",
        icon: androidIcon,
      },
      {
        name: "React Native App",
        icon: reactNativeIcon,
      },
      {
        name: "Flutter App",
        icon: flutterIcon,
      },
      {
        name: "Sunmi POS App",
        icon: sunmiIcon,
      },
    ],
    cta: {
      text: "Explore More",
      link: "/",
    },
  },
  {
    id: 2,
    service_name: "Web Design & Development",
    service_info:
      "Custom web portals, CMS platforms, and eCommerce sites — powered by clean code and solid architecture.",
    service_types: [
      {
        name: "Web Potal Development",
        icon: webPortalIcon,
      },
      {
        name: "Custom Web Development",
        icon: customWebDevIcon,
      },
      {
        name: "E-commerce Development",
        icon: ecommIcon,
      },
      {
        name: "CMS Web Development",
        icon: cmsIcon,
      },
      {
        name: "Support & Maintenance",
        icon: maintenanceIcon,
      },
    ],
    cta: {
      text: "Explore More",
      link: "/",
    },
  },
  {
    id: 3,
    service_name: "UI/UX Design & Branding",
    service_info:
      "Designs that don’t just look good, but feel intuitive. We craft user-centric experiences and strong brand identities.",
    service_types: [
      {
        name: "Mobile & Web Design",
        icon: mobAndWebIcon,
      },
      {
        name: "Product Design",
        icon: productDesignIcon,
      },
      {
        name: "Branding & Logo Design",
        icon: brandingIcon,
      },
      {
        name: "Prototype & Wireframe",
        icon: prototypeIcon,
      },
      {
        name: "Visual Design",
        icon: visualDesignIcon,
      },
    ],
    cta: {
      text: "Explore More",
      link: "/",
    },
  },
];

export default services;
