<?php

namespace App\Models;

use Corcel\Post as Corcel;
use App\Traits\Blog;

class Post extends Corcel
{
    use Blog;

    protected $postType = 'post';
    protected $with = 'attachment';

    protected $visible = [
        // 'ID',
        'title',
        'slug',
        'excerpt',
        'created_at',
        'image',
        'terms',
        'images',
        // 'attachment'
    ];

    public function getImagesAttribute() {
        if (count($this->attachment)) {
            $arr = $this->attachment[0]->meta[1]->value;
            array_pop($arr);

            return $arr;
        }
    }

    protected $appends = [
        'title',
        'slug',
        'excerpt',
        'content',
        'created_at',
        'image',
        'terms',
        'images'
    ];
}