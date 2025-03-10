@extends('base')

@section('content')
    <main class="app__content">
        <h1>
            {!! the_title() !!}
        </h1>

        {!! the_content() !!}
    </main>
@endsection
