# ALAB-308A-1-1

## Objectives

Calculate the maximum size of the JavaScript call stack.

- Use “trampolines” to handle stack overflow issues caused by recursion.
- Use deferred execution within the event loop to allow the browser to render between calculations.

## Introduction

### Part 1: Stack Overflow

Ever wonder where the popular question-and-answer website got its name? When a program attempts to allocate too much memory to the call stack, it results in a “stack overflow” error. In JavaScript, this error reads “maximum call stack size exceeded.”
So what is the maximum stack size, and when might this become an issue?
Since the call stack holds function calls, stack overflows are most common during recursive function calls. When recursion takes too long to complete, or never does complete, the call stack fills beyond its maximum memory capacity.
This capacity varies based on a number of factors - you will never know exactly how many calls you are allowed to put on the stack before it overflows.
You can, however, do the following:

- Declare a global counter variable.
- Create a simple function that increments the variable, and then calls itself recursively.
- Surround the initial function call in a try/catch block.
- Within the catch, log the error and the value of the counter variable.
