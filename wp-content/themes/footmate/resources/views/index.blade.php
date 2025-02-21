@extends('base')

@section('content')
    <main class="-wrapper">
        @if (have_posts())
            {{ the_title() }}
        @endif
    </main>
@endsection
