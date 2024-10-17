# Laravel Breeze - Next.js Edition ▲

## With TypeScript and Server-first Approach

## Introduction

This repository is an implementation of the [Laravel Breeze](https://laravel.com/docs/starter-kits) application
with [Next.js](https://nextjs.org) serving as the frontend.

There is an [official implementation here](https://github.com/laravel/breeze-next) which is written by the Laravel team
using JavaScript. This implementation is different from the official one in the following ways:

- It is written in TypeScript instead of JavaScript
- Instead of using Next.js purely as a frontend application, it utilizes the backend capabilities of the framework. All
  data fetching is handled on the server side,
  following [the best practices recommended by Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching).
- It uses the powerful and officially recommended auth library [Auth.js](https://authjs.dev/) (previously known as
  NextAuth.js) as the authentication library. This enables
  us to access the current user's session on the server side and prepare the response accordingly, among other benefits.
- It uses the new React 19 hook [useActionState](https://react.dev/reference/react/useActionState)
  and [Next.js server actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
  for smooth `<form>` experience and data
  security.
- It uses [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/) to build the user interface.

## Installation

### 1. Set up Breeze

You can skip this step if you have already set up Breeze. There is nothing different
from [the official instructions](https://laravel.com/docs/starter-kits#laravel-breeze).

Here is how you install Laravel Breeze into
a [fresh Laravel application](https://laravel.com/docs/installation):

```bash
# Create the Laravel application...
laravel new next-backend

cd next-backend

# Install Breeze and dependencies...
composer require laravel/breeze --dev

php artisan breeze:install api

# Run database migrations...
php artisan migrate
```

Please ensure that your application's `APP_URL` and `FRONTEND_URL` environment variables are set to
`http://localhost:8000` and `http://localhost:3000`, respectively.

You may serve the Laravel application by running:

```
php artisan serve
```

### 2. Set up Laravel to accept incoming requests from the Next.js server

Now that Breeze is set up, you will need to make necessary changes to accommodate the requests coming from the Next.js
server.

#### 1. Install the package

```bash
composer require naveed/breeze-next
```

#### 2. Run the command

Run the following command to set up the application automatically.

```
php artisan breeze-next:setup 
```

This command will automatically make necessary changes to the following files in your project:

```
app/Http/Controllers/Auth/AuthenticatedSessionController.php
app/Http/Controllers/Auth/RegisteredUserController.php
app/Http/Controllers/Auth/VerifyEmailController.php
config/sanctum.php
routes/api.php
routes/auth.php
routes/web.php
.env
```

#### 3. Follow the instructions

##### a. Match `.env` files

As instructed by the command output:

1. Copy the environment variable `BREEZE_NEXT_CSRF_KEY` from your `.env`
2. Clone this repository to get your starter Next.js application
3. Add `BREEZE_NEXT_CSRF_KEY=<your-key-in-dot-env>`
   in the `.env.local` file in the root of your Next.js application.

##### b. Check your `User` model

Make sure your `User` model uses the `Laravel\Sanctum\HasApiTokens` trait.

### 3. Run the application

Next, run the clone of this repository like any other Next.js application:

1. Install its dependencies with `pnpm install` or `yarn install` or `npm install`.
2. Run the application via `pnpm dev` or `yarn dev` or `npm run dev`.
