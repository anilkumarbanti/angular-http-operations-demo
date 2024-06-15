# Hello World Angular HTTP Demo

This repository contains code examples and demonstrations for a guest lecture on Angular, covering concepts from chapters 1 to 8. It includes practical examples of Angular HTTP client operations (GET, POST, PUT, DELETE) along with explanations and code snippets.

## Table of Contents

1. [Introduction to Angular](#introduction-to-angular)
2. [Setting up Angular Development Environment](#setting-up-angular-development-environment)
3. [Understanding Angular Components](#understanding-angular-components)
4. [Angular Directives](#angular-directives)
5. [Services and Dependency Injection](#services-and-dependency-injection)
6. [Angular Routing](#angular-routing)
7. [Forms in Angular](#forms-in-angular)
8. [HTTP Client in Angular](#http-client-in-angular)

## Introduction to Angular

- Overview of the Angular framework
- History and evolution
- Key features and benefits

## Setting up Angular Development Environment

- Installation of Node.js and npm
- Installing Angular CLI
- Creating a new Angular project

## Understanding Angular Components

- What are components?
- Creating components using Angular CLI
- Component structure: Template, Class, Metadata
- Data binding in Angular

## Angular Directives

- Introduction to directives
- Types of directives: Structural and Attribute directives
- Commonly used directives in Angular: \*ngIf, \*ngFor, \*ngSwitch, etc.

## Services and Dependency Injection

- What are services in Angular?
- Creating and consuming services
- Dependency Injection (DI) in Angular

## Angular Routing

- Introduction to Angular Router
- Setting up routes in Angular
- Route parameters and navigation
- Lazy loading modules

## Forms in Angular

- Template-driven forms vs. Reactive forms
- Creating and validating forms in Angular
- Handling form submissions

## HTTP Client in Angular

### Introduction

The Angular HTTP client module (`@angular/common/http`) provides a simplified API for HTTP requests. It supports various HTTP methods: GET, POST, PUT, DELETE, etc., and handles request and response transformations.

### Setting Up HTTP Client

To use the HTTP client, import `HttpClientModule` in your main application module (`app.module.ts`).

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpDemoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
