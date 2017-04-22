          var yjnotes = {            "title": "YamJS",            "description": "A summation of the API that is YamJS, AKA Yam Juice",            "sections": [{
  "title": "[yam] Core functionality",
  "items": [
    {
      "title": ".require()",
      "description": "Requires a module as a dependancy. Throws an error if that module doesn't exist at runtime",
      "params": [
        {
          "name": "namespace",
          "type": "String",
          "description": "The required namespace"
        }
      ]
    },
    {
      "title": ".val()",
      "description": "Safely gets or sets a nested property value on an object",
      "params": [
        {
          "name": "root",
          "type": "Object",
          "description": "The target object"
        },
        {
          "name": "path",
          "type": "String",
          "description": "The dot notation path"
        },
        {
          "name": "[value]",
          "type": "Object",
          "description": "If passed sets the value defined by the path"
        }
      ],
      "returns": {
        "type": "Object",
        "description": "The value stored at the path or undefined if there is no value"
      }
    },
    {
      "title": ".mixin()",
      "description": "Copy properties from a source object to a target object. If multiple sources are specified then it copies from left to right.",
      "params": [
        {
          "name": "target",
          "type": "Object",
          "description": "The target object"
        },
        {
          "name": "source",
          "type": "Object",
          "description": "An object to copy properties from"
        },
        {
          "name": "[source, source, ...]",
          "type": "Object",
          "description": "More objects can be specified as additional arguments"
        },
        {
          "name": "[merge]",
          "type": "Boolean",
          "description": "If true then it will do a deep merge instead of just a shallow copy"
        }
      ]
    },
    {
      "title": ".ns()",
      "description": "Creates a namespace object",
      "params": [
        {
          "name": "namespace",
          "type": "String",
          "description": "The namespace to create"
        },
        {
          "name": "[obj]",
          "type": "Object|Null",
          "description": "An object to mix into the created namespace"
        }
      ],
      "returns": {
        "type": "Object",
        "description": "The created object"
      }
    },
    {
      "title": ".ctor()",
      "description": "Creates a class that can be subclassed",
      "params": [
        {
          "name": "name",
          "type": "String",
          "description": "The name of the class"
        },
        {
          "name": "[klass]",
          "type": "Object",
          "description": "The superclass to be extended"
        },
        {
          "name": "[mixins]",
          "type": "Array",
          "description": "An array of mixins for the class definition"
        },
        {
          "name": "definition",
          "type": "Object",
          "description": "An object that defines the methods on the class"
        }
      ],
      "returns": {
        "type": "Function",
        "description": "Returns a class"
      }
    }
  ]
},
{
  "title": "[yam] Pub-Sub functionality",
  "items": [
    {
      "title": ".publish()",
      "description": "Publish an event",
      "params": [
        {
          "name": "topic",
          "type": "String",
          "description": "The name of the event"
        },
        {
          "name": "args",
          "type": "Object|Array",
          "description": "A single object or an array of arguments to pass to any listeners"
        }
      ],
      "returns": {
        "type": "Array",
        "description": "An array of results"
      }
    },
    {
      "title": ".subscribe()",
      "description": "Subscribe to an event",
      "params": [
        {
          "name": "topic",
          "type": "String",
          "description": "The name of the event"
        },
        {
          "name": "callback",
          "type": "Function",
          "description": "The callback to call"
        }
      ],
      "returns": {
        "type": "Array",
        "description": "The that handle can be used to unsubscribe"
      }
    },
    {
      "title": ".unsubscribe()",
      "description": "Unsubscribe from an event",
      "params": [
        {
          "name": "handle",
          "type": "Array",
          "description": "The handle to cancel"
        }
      ]
    },
    {
      "title": ".unsubscribeAll()",
      "description": "Unsubscribe all callbacks"
    }
  ]
},
{
  "title": "[yam] Helpers for functions",
  "items": [
    {
      "title": ".bind()",
      "description": "Binds a function to a scope",
      "params": [
        {
          "name": "scope",
          "type": "Object",
          "description": "The scope to bind to"
        },
        {
          "name": "func",
          "type": "String|Function",
          "description": "The functional to call with appropriate scope. If func is a string then it should exist on the scope object."
        }
      ],
      "returns": {
        "type": "Function",
        "description": "A function that when called will apply the scope appropriately"
      }
    },
    {
      "title": ".curry()",
      "description": "Curries a function"
    },
    {
      "title": ".hook()",
      "description": "Proxies a function and creates a hook that calls the targetFunc when the srcFunc is called",
      "params": [
        {
          "name": "src",
          "type": "Object|Null",
          "description": "Source object"
        },
        {
          "name": "srcFunc",
          "type": "String",
          "description": "Method name"
        },
        {
          "name": "target",
          "type": "Object|null",
          "description": "Target object"
        },
        {
          "name": "targetFunc",
          "type": "String|Function",
          "description": "Method name or function"
        }
      ],
      "returns": {
        "type": "Object",
        "description": "The connection handle that can be disconnected with yam.unhook(handle)"
      }
    },
    {
      "title": ".hookOnce()",
      "description": "The same as hook() but immediately unhook the targetFunc",
      "params": [
        {
          "name": "src",
          "type": "Object|Null",
          "description": "Source object"
        },
        {
          "name": "srcFunc",
          "type": "String",
          "description": "Method name"
        },
        {
          "name": "target",
          "type": "Object|null",
          "description": "Target object"
        },
        {
          "name": "targetFunc",
          "type": "String|Function",
          "description": "Method name or function"
        }
      ],
      "returns": {
        "type": "Object",
        "description": "The connection handle that can be disconnected with yam.unhook(handle)"
      }
    },
    {
      "title": ".unhook",
      "description": "Unhook a function from it's target",
      "params": [
        {
          "name": "handle",
          "type": "Array",
          "description": "The handle created by hook and hookOnce"
        }
      ]
    }
  ]
},
{
  "title": "[yam] URL Helpers",
  "items": [
    {
      "title": ".objectify()",
      "description": "Convert a querystring into a JS object",
      "params": [
        {
          "name": "str",
          "type": "String",
          "description": "The querystring"
        }
      ],
      "returns": {
        "type": "Object",
        "description": "The javascript object of the querystring"
      }
    },
    {
      "title": ".paramify()",
      "description": "Convert a JS object into a querystring",
      "params": [
        {
          "name": "obj",
          "type": "Object",
          "description": "The object to convert"
        }
      ],
      "returns": {
        "type": "String",
        "description": "A querystring"
      }
    }
  ]
},
{
  "title": "[yam] Helpful Utils",
  "items": [
    {
      "title": ".escapeRegExp()",
      "description": "Escapes a string so that it can be used in a regex",
      "params": [
        {
          "name": "str",
          "type": "String",
          "description": "The string to escape"
        }
      ],
      "returns": {
        "type": "String",
        "description": "The escaped string"
      }
    },
    {
      "title": ".log()",
      "description": "Wrapper for console.log that is silent in production"
    },
    {
      "title": ".warn()",
      "description": "Wrapper for console.warn that is silent in production"
    },    {
      "title": ".dir()",
      "description": "Wrapper for console.dir that is safe"
    }
  ]
},
{
  "title": "[yam] Things about this user",
  "items": [
    {
      "title": ".getCurrentUser()",
      "description": "Returns the current logged in user"
    },
    {
      "title": ".setCurrentUser()",
      "description": "Sets the current logged in user",
      "params": [
        {
          "name": "user",
          "type": "Object",
          "description": "A user object"
        }
      ],
      "returns": {
        "type": "Object",
        "description": "Returns the current logged in user"
      }
    },
    {
      "title": ".getCurrentNetwork()",
      "description": "Returns the current network"
    },
    {
      "title": ".setCurrentNetwork()",
      "description": "Sets the current network",
      "params": [
        {
          "name": "network",
          "type": "Object",
          "description": "A network object"
        }
      ],
      "returns": {
        "type": "Object",
        "description": "Returns the current network"
      }
    },
    {
      "title": ".getUserSetting",
      "description": "Gets a user setting",
      "params": [
        {
          "name": "name",
          "type": "String",
          "description": "Key for this setting"
        }
      ]
    },
    {
      "title": ".getUserNetworkSetting",
      "description": "Gets a network setting",
      "params": [
        {
          "name": "name",
          "type": "String",
          "description": "Key for this setting"
        }
      ]
    }
  ]
},
{
  "title": "[yam] Config and Treatments",
  "items": [
    {
      "title": ".config()",
      "description": "Publish an event",
      "params": [
        {
          "name": "settings|key",
          "type": "Object|String",
          "description": "Either a JS object to be used as settings or a key"
        },
        {
          "name": "[value]",
          "type": "Object",
          "description": "The value to be set if the first param is a key"
        }
      ],
      "returns": {
        "type": "Object",
        "description": "A copy of the settings object"
      }
    },
    {
      "title": ".treatment()",
      "description": "Retrieves the value for an experiment",
      "params": [
        {
          "name": "experiment",
          "type": "String",
          "description": "The name of the experiment we want to check"
        },
        {
          "name": "[defaultValue]",
          "type": "Object",
          "description": "An optional default value to return"
        }
      ]
    }
  ]
}            ]          };          var cheatSheet = new CheatSheet(yjnotes);          cheatSheet.render(document.getElementById("target"));