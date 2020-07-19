import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem : Product

 @Input() addToWishlist:boolean;

  constructor(
    private msg: MessengerService,
    private cartservice:CartService,
    private wishlistservice:WishlistService ) { }

  ngOnInit(): void {
  }
  handleAddToCart(){
    this.cartservice.addProductToCart(this.productItem).subscribe(()=>{
      this.msg.sendMsg(this.productItem)
    })  
  }
  handleAddToWishlist(){
    this.wishlistservice.addToWishlist(this.productItem.id).subscribe(()=>{
        this.addToWishlist = true;
    });
  }
  handleRemoveFromWishlist(){
     this.wishlistservice.removeFromWishlist(this.productItem.id).subscribe(()=> {
       this.addToWishlist = false;
     })
  }

}
