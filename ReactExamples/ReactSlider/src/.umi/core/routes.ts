// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/home/butmocks/Projects/react2/ReactExamples/ReactSlider/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('/home/butmocks/Projects/react2/ReactExamples/ReactSlider/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('/home/butmocks/Projects/react2/ReactExamples/ReactSlider/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/changelog",
        "component": require('/home/butmocks/Projects/react2/ReactExamples/ReactSlider/docs/changelog.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/changelog.md",
          "updatedTime": 1657061430000,
          "slugs": [
            {
              "depth": 1,
              "value": "Changelog",
              "heading": "changelog"
            },
            {
              "depth": 2,
              "value": "9.7.1",
              "heading": "971"
            },
            {
              "depth": 2,
              "value": "9.6.5",
              "heading": "965"
            },
            {
              "depth": 2,
              "value": "9.6.4",
              "heading": "964"
            },
            {
              "depth": 2,
              "value": "9.6.3",
              "heading": "963"
            },
            {
              "depth": 2,
              "value": "9.6.2",
              "heading": "962"
            },
            {
              "depth": 2,
              "value": "9.6.1",
              "heading": "961"
            },
            {
              "depth": 2,
              "value": "9.6.0",
              "heading": "960"
            },
            {
              "depth": 2,
              "value": "9.2.0",
              "heading": "920"
            },
            {
              "depth": 2,
              "value": "9.1.0",
              "heading": "910"
            },
            {
              "depth": 2,
              "value": "8.7.0",
              "heading": "870"
            },
            {
              "depth": 2,
              "value": "8.6.0",
              "heading": "860"
            },
            {
              "depth": 2,
              "value": "8.5.0",
              "heading": "850"
            },
            {
              "depth": 2,
              "value": "8.4.0 / 2017-11-09",
              "heading": "840--2017-11-09"
            },
            {
              "depth": 2,
              "value": "8.3.0 / 2017-07-28",
              "heading": "830--2017-07-28"
            },
            {
              "depth": 2,
              "value": "8.2.0 / 2017-07-04",
              "heading": "820--2017-07-04"
            },
            {
              "depth": 2,
              "value": "8.1.0 / 2017-06-09",
              "heading": "810--2017-06-09"
            },
            {
              "depth": 2,
              "value": "8.0.0 / 2017-05-31",
              "heading": "800--2017-05-31"
            },
            {
              "depth": 2,
              "value": "6.0.0 / 2017-01-25",
              "heading": "600--2017-01-25"
            },
            {
              "depth": 2,
              "value": "5.0.0 / 2016-09-12",
              "heading": "500--2016-09-12"
            },
            {
              "depth": 2,
              "value": "4.0.0 / 2016-08-12",
              "heading": "400--2016-08-12"
            },
            {
              "depth": 2,
              "value": "3.6.0 / 2016-04-01",
              "heading": "360--2016-04-01"
            },
            {
              "depth": 2,
              "value": "1.2.5 / 2015-07-13",
              "heading": "125--2015-07-13"
            }
          ],
          "title": "Changelog"
        },
        "title": "Changelog - rc-slider"
      },
      {
        "path": "/",
        "component": require('/home/butmocks/Projects/react2/ReactExamples/ReactSlider/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1657061430000,
          "title": "rc-slider",
          "slugs": [
            {
              "depth": 1,
              "value": "rc-slider",
              "heading": "rc-slider"
            },
            {
              "depth": 2,
              "value": "Install",
              "heading": "install"
            },
            {
              "depth": 2,
              "value": "Example",
              "heading": "example"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 2,
              "value": "Compatibility",
              "heading": "compatibility"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "createSliderWithTooltip(Slider | Range) => React.Component",
              "heading": "createsliderwithtooltipslider--range--reactcomponent"
            },
            {
              "depth": 3,
              "value": "Common API",
              "heading": "common-api"
            },
            {
              "depth": 3,
              "value": "Slider",
              "heading": "slider"
            },
            {
              "depth": 3,
              "value": "Range",
              "heading": "range"
            },
            {
              "depth": 3,
              "value": "SliderTooltip",
              "heading": "slidertooltip"
            },
            {
              "depth": 2,
              "value": "Development",
              "heading": "development"
            },
            {
              "depth": 2,
              "value": "Test Case",
              "heading": "test-case"
            },
            {
              "depth": 2,
              "value": "Coverage",
              "heading": "coverage"
            },
            {
              "depth": 2,
              "value": "License",
              "heading": "license"
            }
          ]
        },
        "title": "rc-slider - rc-slider"
      },
      {
        "path": "/demo/debug",
        "component": require('/home/butmocks/Projects/react2/ReactExamples/ReactSlider/docs/demo/debug.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/demo/debug.md",
          "updatedTime": 1657061430000,
          "slugs": [
            {
              "depth": 2,
              "value": "debug",
              "heading": "debug"
            }
          ],
          "title": "debug",
          "hasPreviewer": true,
          "group": {
            "path": "/demo",
            "title": "Demo"
          }
        },
        "title": "debug - rc-slider"
      },
      {
        "path": "/demo/handle",
        "component": require('/home/butmocks/Projects/react2/ReactExamples/ReactSlider/docs/demo/handle.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/demo/handle.md",
          "updatedTime": 1657061430000,
          "slugs": [
            {
              "depth": 2,
              "value": "handle",
              "heading": "handle"
            }
          ],
          "title": "handle",
          "hasPreviewer": true,
          "group": {
            "path": "/demo",
            "title": "Demo"
          }
        },
        "title": "handle - rc-slider"
      },
      {
        "path": "/demo/marks",
        "component": require('/home/butmocks/Projects/react2/ReactExamples/ReactSlider/docs/demo/marks.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/demo/marks.md",
          "updatedTime": 1657061430000,
          "slugs": [
            {
              "depth": 2,
              "value": "marks",
              "heading": "marks"
            }
          ],
          "title": "marks",
          "hasPreviewer": true,
          "group": {
            "path": "/demo",
            "title": "Demo"
          }
        },
        "title": "marks - rc-slider"
      },
      {
        "path": "/demo/range",
        "component": require('/home/butmocks/Projects/react2/ReactExamples/ReactSlider/docs/demo/range.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/demo/range.md",
          "updatedTime": 1657061430000,
          "slugs": [
            {
              "depth": 2,
              "value": "range",
              "heading": "range"
            }
          ],
          "title": "range",
          "hasPreviewer": true,
          "group": {
            "path": "/demo",
            "title": "Demo"
          }
        },
        "title": "range - rc-slider"
      },
      {
        "path": "/demo/slider",
        "component": require('/home/butmocks/Projects/react2/ReactExamples/ReactSlider/docs/demo/slider.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/demo/slider.md",
          "updatedTime": 1657061430000,
          "slugs": [
            {
              "depth": 2,
              "value": "slider",
              "heading": "slider"
            }
          ],
          "title": "slider",
          "hasPreviewer": true,
          "group": {
            "path": "/demo",
            "title": "Demo"
          }
        },
        "title": "slider - rc-slider"
      },
      {
        "path": "/demo/vertical",
        "component": require('/home/butmocks/Projects/react2/ReactExamples/ReactSlider/docs/demo/vertical.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/demo/vertical.md",
          "updatedTime": 1657061430000,
          "slugs": [
            {
              "depth": 2,
              "value": "vertical",
              "heading": "vertical"
            }
          ],
          "title": "vertical",
          "hasPreviewer": true,
          "group": {
            "path": "/demo",
            "title": "Demo"
          }
        },
        "title": "vertical - rc-slider"
      },
      {
        "path": "/demo",
        "meta": {},
        "exact": true,
        "redirect": "/demo/debug"
      }
    ],
    "title": "rc-slider",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
