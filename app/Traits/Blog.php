<?php

namespace App\Traits;

trait Blog
{
	public function scopeLatestPosts($query)
    {
        return $query->orderBy('post_date', 'desc');
    }

    public function scopeByName($query, $name)
    {
        return $query->where('post_name', $name);
    }

    public function scopeByCategory($query, $categoryName)
    {
        return $query->taxonomy('category', $categoryName);
    }

    public function scopeByTag($query, $tagName)
    {
        return $query->taxonomy('post_tag', $tagName);
    }

    public function scopeHasPosts($query)
    {
        return $query->where('count', '>', 0);
    }

    // public function getImagesAttribute()
    // {
    //     return $this->attachment[0]->meta[1]->value;
    // }
}