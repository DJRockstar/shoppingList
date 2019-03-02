$(function(){
    $("button[type='submit']").on("click", function(e){
        e.preventDefault();
        let newItem = `      <li>
        <span class="shopping-item">${$("#shopping-list-entry").val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
        $("ul").prepend(newItem);
    });
    $("button.shopping-item-toggle").on("click",function(e){
        //e.stopPropagation();
         $(this).closest("li").find("span.shopping-item").toggleClass("shopping-item__checked");
    });
    $("button.shopping-item-delete").on("click",function(e){
         //e.stopPropagation();
         $(this).closest("li").remove();
    });
});