<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Tag;
use App\Models\Post;

class BlogController extends Controller
{
	public function getIndex()
	{
		return view('home');
	}

	public function init()
	{
		return Post::published()
			->latestPosts()
			->take(10)->get();
	}

	public function getCategoriesAndTags()
	{
		$categories = Category::hasPosts()->get();

		$tags = Tag::hasPosts()->get();

		return compact('categories', 'tags');
	}

	public function getPosts()
	{
		return Post::published()
			->latestPosts()
			->paginate(10);
	}

	public function getPostByName($name)
	{
		return Post::published()
			->byName($name)
			->firstOrFail()
			->makeVisible('content');
	}

	public function getPostsbyTag($tagName)
	{
		return Post::published()
			->latestPosts()
			->byTag($tagName)
			->paginate(10);
	}

	public function getPostsbyCategory($categoryName)
	{
		return Post::published()
			->latestPosts()
			->byCategory($categoryName)
			->paginate(10);
	}
}