# enforce alphabetical ordering of properties and prioritizing vue-specific attributes (attribute-order)

## Rule Details

:+1: Examples of **correct** code`:

```html

<div
	@click="handleClick"
	:class="$style.myStyle"
	v-for="(item, index) in items"
	myProp="title"
	ref="myComponent">
</div>

```

```html

<div
	@click="handleClick"
	:class="$style.myStyle"
	v-if="itemExists"
	:myProp="title"
	ref="myComponent">
</div>

```

```html

<div
	@click="handleClick"
	:amount="34"
	:class="$style.myStyle"
	ref="myComponent">
</div>

```

:-1: Examples of **incorrect** code`:

```html

<div
	@click="handleClick"
	v-for="(item, index) in items"
	:class="$style.myStyle"
	myProp="title"
	ref="myComponent">
</div>

```

```html

<div
	@click="handleClick"
	v-if="itemExists"
	:class="$style.myStyle"
	myProp="title"
	ref="myComponent">
</div>

```

```html

<div
	:amount="34"
	@click="handleClick"
	:class="$style.myStyle"
	ref="myComponent">
</div>

```
