export interface OnSubmitProps{
    onSetSearchQuery: (searchQuery: string) => void;
    fetchData:(inputText:string,isReset:boolean) => void;
}