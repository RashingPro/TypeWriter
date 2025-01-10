# UltimateTypeWriter

<img src="./demo.gif" alt="demo"></img>
## Instalation
`npm install ultimate-type-writer`
## Using
There are 2 different ways to use this package<br>
Hard way's need more props to set, but it will provide more customizable effect
### Simple way
#### Importing module
```js
import TypeWriter from "ultimate-type-writer";
```
#### Props
```js
<TypeWriter
	strings: string[], // strings for typing
	isCursor?: boolean, // (optional) true by default. Set false to hide cursor
	delayAfterDelete: number, // delay in milliseconds after all symbols deleted, before start printing new string. Recomended value is 1000
	delayAfterPrint: nubmer, // delay in milliseconds after all symbols printed, before start deleting Recomended value is 1000
	delayBetweenSymbol: nubmer, // delay in milliseconds after symbol printed, before printing next one Recomended value is 60
	debug?: boolean, // (optional) false by defaul. Set true to display debug message in console. Log level is debug
	wrapperClassName?: string, // (optional) "type_writer_wrapper" by default. Additional info provided below
	cursorClassName?: string // (optional) "cursor" by default. Additional info provided below
/>
```
#### Example
```js
import TypeWriter from "ultimate-type-writer";

const strings = {
	"apples",
	"bananas",
	"chocolate"
}

function ComponentWithTypeWriter() {
    return <div className={"containerWithTypeWriter"}>
		<span>Author likes </span> {/*Dont forget add space in the end of constant part*/}
		<TypeWriter
			strings={strings}
			delayAfterDelete=1000
			delayAfterPrint=1000
			delayBetweenSymbol=60
		/>
  	</div>
}
```
#### Return format of \<TypeWriter\>
```js
<span className={wrapperClassName}>
	{displayedText}
	{isCursor ? <span className={cursorClassName}>|</span> : <></>}
</span>
```

### Hard way
#### Importing module
```js
import { CustomTypeWriter } from "ultimate-type-writer";
```
Coming soon
