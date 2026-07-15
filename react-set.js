




const getProps=(el)=>{
	for(const key in el){
		if(key.startsWith('__reactProps')){
			return el[key];
		}
	}
};



const reactSet = (el,value)=>{
	const props = getProps(el);
	props.onChange({currentTarget:{value:value}});
};


const input = document.querySelector('input[data-testid="search-input"]');

reactSet(input,'asfd');
