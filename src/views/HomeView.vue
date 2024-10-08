<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useQuery } from '@vue/apollo-composable'
import { watch, ref, computed } from 'vue';
import categoriesQuery from '../graphql/queries/Categories.js';
import booksQuery from '../graphql/queries/Books.js';
import BooksByFeatured from '@/graphql/queries/BooksByFeatured';

const selectedCategory = ref(null);

const { result: categoriesResult, loading: categoriesLoading } = useQuery(categoriesQuery);
const { result: booksResult, loading: booksLoading } = useQuery(booksQuery);

const filteredBooks = computed(() => {
  if (!booksResult.value) return [];
  if (!selectedCategory.value) return booksResult.value.books;
  return booksResult.value.books.filter(book => book.category.id === selectedCategory.value);
});

function selectCategory(category_id) {
  selectedCategory.value = category_id;
}

function showAll() {
  selectedCategory.value = null;
}
</script>

<template>
  <div>
    <div>
      <div v-if="categoriesLoading">
        Content is loading...
      </div>
      <div v-if="categoriesResult">
        <div v-for="category of categoriesResult.categories" :key="category.id">
          <a @click="selectCategory(category.id)" href="#">{{ category.name }}</a>
        </div>
        <div>
          <a @click="showAll" href="#">All</a>
        </div>
      </div>
    </div>
    <div style="margin-top: 10px;">
      <div v-if="booksLoading">
        Content is loading...
      </div>
      <div v-if="filteredBooks">
        <ul>
          <li v-for="book of filteredBooks" :key="book.id">
            {{ book.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
