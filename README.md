# ps-play

```
# Install the Node switcher
npm i -g n

# Get Node 8.17
n 8.17

# PATH
PATH=$(npm bin):$PATH

# Install deps
npm i
bower install purescript-psci-support#3.0.0

# Start the repl
purs repl 'bower_components/**/*.purs' Try.purs

# Play
> import Try
> data Bar = C | D {x::Int}
> inspect (D {x : 3})
"D { value0: { x: 3 } }"
```
