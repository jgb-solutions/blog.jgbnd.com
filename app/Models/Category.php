<?php

namespace App\Models;

use Corcel\TermTaxonomy;
use App\Traits\Blog;

class Category extends TermTaxonomy
{
	use Blog;

    protected $taxonomy = 'category';

    protected $visible = ['term', 'count'];
}