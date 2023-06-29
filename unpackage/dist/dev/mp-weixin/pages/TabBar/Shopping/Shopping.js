"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_number_box2 = common_vendor.resolveComponent("u-number-box");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  (_easycom_u_checkbox2 + _easycom_u_number_box2 + _easycom_u_checkbox_group2)();
}
const _easycom_u_checkbox = () => "../../../node-modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_u_number_box = () => "../../../node-modules/uview-plus/components/u-number-box/u-number-box.js";
const _easycom_u_checkbox_group = () => "../../../node-modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
if (!Math) {
  (_easycom_u_checkbox + _easycom_u_number_box + _easycom_u_checkbox_group)();
}
const _sfc_main = {
  __name: "Shopping",
  setup(__props) {
    const checkboxValue1 = common_vendor.ref([]);
    const allPrice = common_vendor.ref(0);
    const checkboxList1 = common_vendor.ref([
      {
        id: 1,
        disabled: false,
        //是否禁用
        name: "易果蓝莓大颗易果蓝莓大颗当季水果",
        goodImg: common_assets.goodImg,
        weight: "85",
        baozhuang: "有包装",
        price: 30,
        num: 1
      },
      {
        id: 2,
        disabled: false,
        //是否禁用
        name: "易果蓝莓大颗易果蓝莓大颗当季水果",
        goodImg: common_assets.goodImg,
        weight: "85",
        baozhuang: "无包装",
        price: 20,
        num: 1
      }
    ]);
    common_vendor.onLoad(() => {
      initCheckedList();
    });
    const initCheckedList = () => {
      checkboxList1.value.forEach((item) => {
        checkboxValue1.value.push(item.id);
      });
    };
    const checkboxChange = (e) => {
      console.log(e);
    };
    const valChange = (e) => {
      console.log("当前值为: " + e.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o((...args) => _ctx.manag && _ctx.manag(...args)),
        c: common_vendor.f(checkboxList1.value, (item, index, i0) => {
          return {
            a: "62808697-1-" + i0 + ",62808697-0",
            b: common_vendor.p({
              size: "30rpx",
              shape: "circle",
              name: item.id,
              activeColor: "#461A5F"
            }),
            c: item.goodImg,
            d: common_vendor.t(item.name),
            e: common_vendor.t(item.weight),
            f: common_vendor.t(item.baozhuang),
            g: common_vendor.t(item.price),
            h: common_vendor.o(valChange, index),
            i: "62808697-2-" + i0 + ",62808697-0",
            j: common_vendor.o(($event) => _ctx.value = $event, index),
            k: index
          };
        }),
        d: common_vendor.p({
          modelValue: _ctx.value
        }),
        e: common_vendor.o(checkboxChange),
        f: common_vendor.o(($event) => checkboxValue1.value = $event),
        g: common_vendor.p({
          modelValue: checkboxValue1.value
        }),
        h: common_vendor.t(allPrice.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Administrator/Desktop/tqt/pages/TabBar/Shopping/Shopping.vue"]]);
wx.createPage(MiniProgramPage);
