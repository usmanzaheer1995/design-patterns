## Strategy design pattern

![alt text](strategy_pattern.png?raw=true)

### When to use
1. When you want to define a class that will have one behavior that is similar to other behaviors in a list
1. I want the class object to be able to choose from:
    * Not flying
    * Fly with wings
    * Fly super fast
1. When you need to use one of several behaviors dynamically

### Pros
1. Often reduces long lists of conditionals
1. Avoids duplicate code
1. Keeps class changes from forcing other class changes
1. Can hide complicated/secret code from user

### Cons
1. Increased number of objects/classse
