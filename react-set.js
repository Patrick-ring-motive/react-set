




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


async function typeSlowly(el, value) {
    el.focus();
    el.value = "";
    el.dispatchEvent(new Event("input", { bubbles: true }));

    for (const char of value) {
      el.value += char;
      el.dispatchEvent(new Event("input", { bubbles: true }));
      await new Promise((r) => setTimeout(r, 1));
    }

    el.dispatchEvent(new Event("change", { bubbles: true }));
    el.blur();
  }
  
  typeSlowly(document.querySelector('[data-slate-string="true"]'),'ASDF')
