<?php

namespace App\Models;

use Corcel\Post as Corcel;
use App\Traits\Blog;

class Post extends Corcel
{
    use Blog;

    protected $postType = 'post';

     protected $visible = [
    	'title',
    	'slug',
    	'excerpt',
    	'created_at',
    	'updated_at',
    	'image',
    	'terms'
    ];
}