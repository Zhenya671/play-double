<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
        rel="stylesheet"
    />
    <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1"
    />
    <style>
        body {
            font-family: "Inter", sans-serif;
        }
    </style>
    <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js"
        defer
    ></script>
    @vite(['resources/js/app.js', 'resources/css/app.css'])
</head>
<body id="app">
<script>window.Laravel = { csrfToken: '{{ csrf_token() }}' }</script>
</body>
</html>
