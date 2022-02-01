# :wave: Say hi to Larabelle! :wave:

[![Generic badge](https://img.shields.io/badge/course%20available%3F-yes-green.svg)](https://shields.io/)

This project is created and intended to be used for the [Shopify Laravel App Development on YouTube](https://www.youtube.com/watch?v=TEts42KPMVk&list=PL-k7XHuPgeIuC6HHc0zCw7fVGsM5OFh3m)


[Watch it here](https://www.youtube.com/watch?v=TEts42KPMVk&list=PL-k7XHuPgeIuC6HHc0zCw7fVGsM5OFh3m) | [Lessons covered](#lessons-covered) |
[How to use](#how-to-use)

## Lessons covered

Status | Lectures
------------ | -------------
:heavy_check_mark: | Installing Shopify CLI
:heavy_check_mark: | Creating Laravel App
:hourglass: | More lessons coming

## How to use

You can use this repository as a reference after or during my tutorials. For example, you may have a typo or maybe you have a slow internet connection and you can't see the codes properly on my video tutorials.

#### Environment variables

Make sure that you have a `.env` file. You can look at `.env.example` and `.env.testing` for inspiration. `.env file must contain the following environment variables
- SHOPIFY_API_KEY
- SHOPIFY_API_SECRET
- SCOPES
- HOST

#### Start laravel

`php artisan serve`

#### Serving React
Make sure to run `npm install` before running the application.

`npm run watch`

Check [Laravel Docs: Running Mix](https://laravel.com/docs/8.x/mix#running-mix) for more information

#### Running tests

```
composer install
composer test
```


If you wish to use this repository instead, then feel free to clone/fork this repository.

If you don't have Shopify CLI installed on your computer, navigate to the [installation page of Shopify CLI](https://shopify.dev/apps/tools/cli).

## Need support?

Unfortunately, there will be no support provided in this free course. 