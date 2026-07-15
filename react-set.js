




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



function insertIntoSlate(elem,text) {
	try{
  const editor = elem.querySelector('[data-slate-editor="true"],[aria-labelledby^="prompt-autoGradableResponseId"]')||elem;
  editor.focus();

  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLElement.prototype, 'innerText'
  );

  // Simulate clipboard paste — Slate handles paste events well
  const dt = new DataTransfer();
  dt.setData('text/plain', text);
  editor.dispatchEvent(new ClipboardEvent('paste', {
    clipboardData: dt,
    bubbles: true,
    cancelable: true
  }));
  

  const nativeSetter = Object.getOwnPropertyDescriptor(
    window.HTMLTextAreaElement.prototype, 'value'
  ).set;
  nativeSetter.call(editor, text);
  editor.dispatchEvent(new Event('input', { bubbles: true }));
}catch(e){
	console.warn(e);
}

}
