---
layoutClass: m-nav-layout
outline: [2, 3, 4]
title: 前端导航
---

<script setup>
import NAV_DATA from './data.json'
</script>

# 前端导航

<ul >
    <li v-for="{title, items} in NAV_DATA" :key="title">
        <h2> {{ title }}</h2>
        <div class="flex gap-2 flex-wrap">
            <div :href="item.link" v-for="item in items" :key="title" class="p-lg bg-#ccc rounded-md">
                <div class="flex items-center">
                    <img
                        :src="item.icon"
                        :alt="item.title"
                        onerror="this.parentElement.style.display='none'"
                    />
                    {{ item.title }}
                </div>
                <p>{{ item.desc }}</p>
            </div>
        </div>
    </li>
</ul>

<!-- <MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/> -->

<br />
