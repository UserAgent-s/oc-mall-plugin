(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{192:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"payments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payments","aria-hidden":"true"}},[t._v("#")]),t._v(" Payments")]),t._v(" "),a("h2",{attrs:{id:"payment-gateways"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-gateways","aria-hidden":"true"}},[t._v("#")]),t._v(" Payment gateways")]),t._v(" "),a("p",[a("code",[t._v("Payment gateways")]),t._v(" are of technical nature and won't be visible to the user. You can\nuse the payment gateway settings page to configure your API keys and other settings for\neach gateway.")]),t._v(" "),a("p",[t._v("Each gateway can be used by one or many payment methods.")]),t._v(" "),a("p",[t._v("You can add custom gateways by implementing and registering a\n"),a("router-link",{attrs:{to:"/development/payment-providers.html"}},[t._v("Payment provider class")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"payment-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Payment methods")]),t._v(" "),a("p",[a("code",[t._v("Payment methods")]),t._v(" are presented to a customer during checkout. They abstract\naway the technical nature of a "),a("code",[t._v("Payment gateway")]),t._v(". You can define a\nname, a description and a logo for each payment method.")]),t._v(" "),a("p",[t._v("You can also specify special payment instructions (see below) or fees\nthat will be added to the user's cart during checkout.")]),t._v(" "),a("p",[t._v("Payment methods use a single "),a("code",[t._v("Payment gateway")]),t._v(" to process a payment.")]),t._v(" "),a("h3",{attrs:{id:"fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fees","aria-hidden":"true"}},[t._v("#")]),t._v(" Fees")]),t._v(" "),a("p",[t._v("You can define fixed and variable fees that will be added to the user's cart\nduring checkout.")]),t._v(" "),a("p",[t._v("If, for example, you want to forward your Stripe fees to the customer, you can\nadd "),a("code",[t._v("0.30 USD")]),t._v(" as fixed fee and "),a("code",[t._v("2.9 %")]),t._v(" as percentage fee.")]),t._v(" "),a("h3",{attrs:{id:"payment-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payment-instructions","aria-hidden":"true"}},[t._v("#")]),t._v(" Payment instructions")]),t._v(" "),a("p",[t._v("You can specify special payment instructions using Twig syntax in the "),a("code",[t._v("Instructions")]),t._v(" field of\nany payment method.")]),t._v(" "),a("p",[t._v("By default, these instructions will be displayed when using the\n"),a("router-link",{attrs:{to:"/components/payment-method-selector.html"}},[t._v("Payment method selector")]),t._v(" or\n"),a("router-link",{attrs:{to:"/components/orders-list.html"}},[t._v("Orders list")]),t._v(" components.")],1),t._v(" "),a("p",[t._v("You can access a "),a("code",[t._v("order")]),t._v(" variable (if available) to display additional information. During the checkout\nprocess you have access to the "),a("code",[t._v("cart")]),t._v(" model since no order was created yet.")]),t._v(" "),a("p",[t._v('Sample instructions for a "Payment in advance" method could be:')]),t._v(" "),a("div",{staticClass:"language-twig line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("{# \n    Check if the order has been created yet.\n    During checkout this might not be the case\n#}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token other"}},[t._v("Send your payment to:\n    *Bank information*\n    \n    Payment id:")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("payment_hash")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token ld"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("endif")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token rd"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])])},[],!1,null,null,null);e.default=n.exports}}]);