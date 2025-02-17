@extends('base')

@section('content')
    <main>
        <h1>
            {!! the_title() !!}
        </h1>

        {!! the_content() !!}
    </main>
@endsection
