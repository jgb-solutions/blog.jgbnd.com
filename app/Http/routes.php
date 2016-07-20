<?php

$app->get('/', 'BlogController@getIndex');
$app->get('api/cattags', 'BlogController@getCategoriesAndTags');
$app->get('api/init', 'BlogController@init');
$app->get('api/posts', 'BlogController@getPosts');
$app->get('api/posts/{name}', 'BlogController@getPostByName');
$app->get('api/category/{categoryName}', 'BlogController@getPostsByCategory');
$app->get('api/tag/{tagName}', 'BlogController@getPostsByTag');