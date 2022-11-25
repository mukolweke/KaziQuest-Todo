import { mount, shallowMount } from "@vue/vue3-jest";
import App from "../../src/App.vue";

describe("App", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(App, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
