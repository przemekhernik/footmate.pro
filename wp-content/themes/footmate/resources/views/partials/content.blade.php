<main class="app__content">
    {!! the_content() !!}

    {!! fm()->blocks()->get('base')->render(['title' => 'custom title']) !!}
</main>
