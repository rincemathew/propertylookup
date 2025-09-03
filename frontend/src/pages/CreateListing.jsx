
export default function CreateListing() {
  return (
    <main>
        <h1>Create Listing Page</h1>
        <form className="flex flex-col sm:flex-row">
            <div>
                <input type="text" placeholder="Name" id="name"/>
                <input type="text" placeholder="Description" id="description"/>
                <input type="text" placeholder="Address" id="address"/>
                <div>
                    <div>
                        <input type="checkbox" id="sale"/>
                        <label htmlFor="sale">Sell</label>
                    </div>
                    <div>
                        <input type="checkbox" id="rent"/>
                        <label htmlFor="rent">Rent</label>
                    </div>
                    <div>
                        <input type="checkbox" id="parking"/>
                        <label htmlFor="parking">Parking Spot</label>
                    </div>
                    <div>
                        <input type="checkbox" id="furnished"/>
                        <label htmlFor="furnished">Furnished</label>
                    </div>
                    <div>
                        <input type="checkbox" id="offer"/>
                        <label htmlFor="offer">Offer</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="number" placeholder="1" id="bedrooms" min='1'/>
                        <label htmlFor="bedrooms">Bedrooms</label>
                    </div>
                    <div>
                        <input type="number" placeholder="1" id="bathrooms" min='1'/>
                        <label htmlFor="bathrooms">Bathrooms</label>
                    </div>
                    <div>
                        <input type="number" placeholder="1" id="regularPrice" min='1'/>
                        <label htmlFor="regularPrice">Regular Price</label>
                    </div>
                    <div>
                        <input type="number" placeholder="1" id="discountPrice" min='1'/>
                        <label htmlFor="discountPrice">Discounted Price</label>
                    </div>
                </div>
            </div>
            <div>
                <span>The first image will be the cover(max 6)</span>
                <input type="file" id="images" accept="images/*" multiple/>
                <button>upload</button>
            <button>create listing</button>
            </div>
        </form>
    </main>
  )
}
