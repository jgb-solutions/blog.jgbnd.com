<?php

namespace App\Models;

use Corcel\TermTaxonomy;
use App\Traits\Blog;

class Tag extends TermTaxonomy
{
	use Blog;

    protected $taxonomy = 'post_tag';

    protected $visible = ['term'];
}