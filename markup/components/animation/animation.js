
$(function () {
  $(document).ready(function() {
    Animation.initGlobalAnimations({
      container: 'body',
      selfTriggeredElems: {
        el1: {
          selector: '.startscreen',
          triggerHook: 1,
          class: 'is-animated'
        },
        el2: {
          selector: '.start-nav',
          triggerHook: 1,
          class: 'is-animated'
        },
        el3: {
          selector: '.preview',
          triggerHook: 1,
          class: 'is-animated'
        },
        el4: {
          selector: '.page__wrapper',
          triggerHook: 1,
          class: 'is-animated'
        }
      }
    });
    Animation.initGlobalAnimations({
      container: '.events',
      selfTriggeredElems: {
        el1: {
          selector: '.events__item',
          triggerHook: .9,
          class: 'is-animated'
        },
        el2: {
          selector: '.download',
          triggerHook: .9,
          class: 'is-animated'
        }
      }
    });

    Animation.initGlobalAnimations({
      container: '.materials',
      selfTriggeredElems: {
        el1: {
          selector: '.material',
          triggerHook: .9,
          class: 'is-animated'
        }
      }
    });

    Animation.initGlobalAnimations({
      container: '.main-page',
      selfTriggeredElems: {
        el1: {
          selector: '.main__details',
          triggerHook: .9,
          class: 'is-animated'
        }
      }
    });
  });
});