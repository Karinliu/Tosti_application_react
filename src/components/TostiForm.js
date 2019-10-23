import React, { Component } from 'react'
import '../sass/start_form.scss';
import customData from '../customData.json';

class TostiForm extends Component {
    render() {
        // console.log(customData.data.map(data => data.bread))
        return (
            <form onSubmit={this.props.submitHandler} method="post" action="/start">
{/*            <fieldset>
           		<legend>Brood</legend>
           		<div className="container">
           			<div className="row">
           				{customData.data.map(data =>
           				<div className="item col-lg-2 col-md-offset-1">
           					<label>
           						<input 
           							checked={this.props.checked} 
           							type="checkbox" 
           							id={data.bread} name={data.bread} value={data.bread} 
           							onClick={this.props.handleClick}
           						/>
           						<span>✓</span>
           						<img src={data.bread_img} alt={data.bread}/>
           						<p>{data.bread}</p>
           					</label>
           				
           				</div>
           				)}
           			</div>
           		</div>
           	</fieldset>*/}
    		<fieldset>
                <legend>Brood</legend>
                <div className="container">
                	{/*Start Row*/}
                    <div className="row">
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="wit" 
	                    			name="wit" 
	                    			value="wit" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://www.koopmans.com/assets/_processed_/3/2/csm_witbrood_4b1574d88c.jpg" alt="brood_img"/>
	                    		<p>Wit</p>
					        </label>
	                    </div>
	                   	<div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="bruin" 
	                    			name="bruin" 
	                    			value="bruin" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://fitgirl.nl/wp-content/uploads/2015/03/bruin-brood.jpg" alt="brood_img"/>
	                    		<p>Bruin</p>	                    		
					        </label>
	                    </div>
	                  	<div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="volkoren" 
	                    			name="volkoren" 
	                    			value="volkoren" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://www.de-zuidmolen.nl/_clientfiles/producten/l/2004.jpg" alt="brood_img"/>
	                    		<p>Volkoren</p>
					        </label>
	                    </div>
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="maisbrood" 
	                    			name="maisbrood" 
	                    			value="maisbrood" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYiysHZ9FY_W1YafDvnA1Qae57p9_BEDedGJp4LRBK3L3tqDHE" alt="brood_img"/>
	                    		<p>Maisbrood</p>
					        </label>
	                    </div>
                    </div>

                    <div className="row">
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="tarwe" 
	                    			name="tarwe" 
	                    			value="tarwe" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkP6hCnPAdpXuHLHvtkhq6HPbQYQ77KbQfBqeBgUUWl0sWvDPH" alt="brood_img"/>
	                    		<p>Tarwe</p>
					        </label>
	                    </div>
	                   	<div className="col item">
	                    	<label>
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="spelt" 
	                    			name="spelt" 
	                    			value="spelt" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-Tt7wqndZoEG3KoD8_qHuPDdTJiDypXmHvhENWDvCX1tZDASH" alt="brood_img"/> 
	                    		<p>Spelt</p>
					        </label>
	                    </div>
	                  	<div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="meergranen" 
	                    			name="meergranen" 
	                    			value="meergranen" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvfST2sRZWmaro9LAdFRsHMmKDx1am-9043Nrsp-NxUmoBl6Od" alt="brood_img"/>
	                    		<p>Meergranen</p>
					        </label>
	                    </div>
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="roggebrood" 
	                    			name="roggebrood" 
	                    			value="roggebrood" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwl6O97aTKGXSY8tuGFCxJE9k-mxWdw6btjC_xj9CxccW7pAm2" alt="brood_img"/>
	                    		<p>Roggebrood</p>
					        </label>
	                    </div>
                    </div>
                </div>
            </fieldset>
    		<fieldset>
                <legend>Kaas</legend>
                <div className="container">
                	{/*Start Row*/}
                    <div className="row">
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="brie" 
	                    			name="brie" 
	                    			value="brie" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://lindenhoff.nl/content/uploads/product_images/156/original/brie_de_meaux-1920x1536.jpg" alt="kaas_img"/>
	                    		<p>Brie</p>
					        </label>
	                    </div>
	                   	<div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="jonge-kaas" 
	                    			name="jonge kaas" 
	                    			value="jonge kaas" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://media.libelle.nl/m/zs88bhpirl2z_home_landscape_top_article_630x325.jpg" alt="kaas_img"/>
	                    		<p>Jonge kaas</p>
					        </label>
	                    </div>
	                  	<div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="parmezaanse-kaas" 
	                    			name="parmezaanse kaas" 
	                    			value="parmezaanse kaas" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://images3.persgroep.net/rcs/eEyQFlw2w63_BfVNJiJ2CasGxaM/diocontent/144299527/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.9" alt="kaas_img"/>
	                    		<p>Parmezaanse kaas</p>
					        </label>
	                    </div>
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="mozarella" 
	                    			name="mozarella" 
	                    			value="mozarella" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="http://cdn.shopify.com/s/files/1/2836/2982/products/mozzarella-cheese-recipe-1_grande.jpg?v=1532463291" alt="kaas_img"/>
	                    		<p>Mozarella</p>
					        </label>
	                    </div>
                    </div>

                    <div className="row">
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="blauwe-kaas" 
	                    			name="blauwe kaas" 
	                    			value="blauwe kaas" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://www.culy.nl/wp-content/uploads/2013/08/466473327.jpg" alt="kaas_img"/>
	                    		<p>Blauwe kaas</p>
					        </label>
	                    </div>
	                   	<div className="col item">
	                    	<label>
								<input 
									checked={this.props.checked} 
									type="checkbox" 
									id="geitenkaas" 
									name="geitenkaas" 
									value="geitenkaas" 
									onClick={this.props.handleClick} 
								/>
								<span>✓</span>
								<img src="https://www.crazykitchen.nl/Files/2/73000/73421/ProductPhotos/MaxContent/867308434.jpg" alt="kaas_img"/>	                    		
	                    		<p>Geitenkaas</p>
					        </label>
	                    </div>
	                  	<div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="cheddar-cheese" 
	                    			name="cheddar cheese" 
	                    			value="cheddar cheese" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://cdn.shopify.com/s/files/1/0150/0232/products/Pearl_Valley_Extra_Sharp_White_Cheddar_large.jpg?v=1521490296" alt="kaas_img"/>
	                    		<p>Cheddar cheese</p>
					        </label>
	                    </div>
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="feta" 
	                    			name="feta" 
	                    			value="feta" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://www.dehippevegetarier.nl/wp-content/uploads/2019/04/shutterstock_364648697.jpg" alt="kaas_img"/>
	                    		<p>Feta</p>
					        </label>
	                    </div>
                    </div>
                </div>
            </fieldset>

    		<fieldset>
                <legend>Vlees beleg</legend>
                <div className="container">
                	{/*Start Row*/}
                    <div className="row">
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="schouderham" 
	                    			name="schouderham" 
	                    			value="schouderham" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://www.streeckhuys.nl/wp-content/uploads/Schouderham_0402.jpg" alt="vlees_img"/>
	                    		<p>Schouderham</p>
					        </label>
	                    </div>
	                   	<div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="achterham" 
	                    			name="achterham" 
	                    			value="achterham" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://www.compaxo.nl/images/producten/ham-producten/MARIJNIZ_160525_8567_WEB.jpg" alt="vlees_img"/>
	                    		<p>Achterham</p>
					        </label>
	                    </div>
	                  	<div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="salami" 
	                    			name="salami" 
	                    			value="salami" 
	                    			onClick={this.props.handleClick} 
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://i2.wp.com/www.broodjesvanteriele.nl/wp-content/uploads/2018/11/salami-e1543267650244.jpg?fit=400%2C316&ssl=1" alt="vlees_img"/>
	                    		<p>Salami</p>
					        </label>
	                    </div>
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="kipfilet" 
	                    			name="kipfilet" 
	                    			value="kipfilet" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://cdn.webshopapp.com/shops/29763/files/92149535/image.jpg" alt="vlees_img"/>
	                    		<p>Kipfilet</p>
					        </label>
	                    </div>
                    </div>

                    <div className="row">
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="kip" 
	                    			name="kip" 
	                    			value="kip" 
	                    			onClick={this.props.handleClick} 
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://odinwinkel.nl/media/catalog/category/1302.jpg" alt="vlees_img"/>
	                    		<p>Kip</p>
					        </label>
	                    </div>
	                   	<div className="col item">
	                    	<label>
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="spek" 
	                    			name="spek" 
	                    			value="spek" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://images.vrt.be/dako2017_1600s_j75/2018/04/17/fd4d1073-4246-11e8-abcc-02b7b76bf47f.jpg" alt="vlees_img"/>
	                    		<p>Spek</p>
					        </label>
	                    </div>
	                  	<div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="bacon" 
	                    			name="bacon" 
	                    			value="bacon" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://www.simplyrecipes.com/wp-content/uploads/2019/08/baked-bacon-Lead-1.jpg" alt="vlees_img"/>
	                    		<p>Bacon</p>
					        </label>
	                    </div>
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="geitenkaas" 
	                    			name="geitenkaas" 
	                    			value="geitenkaas" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://www.allesoveritaliaanseten.nl/wp-content/uploads/2015/05/Gehakt-recepten.jpg" alt="vlees_img"/>
	                    		<p>Gehakt</p>
					        </label>
	                    </div>
                    </div>
                </div>
            </fieldset>

    		<fieldset>
                <legend>Extra topping</legend>
                <div className="container">
                	{/*Start Row*/}
                    <div className="row">
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="avocado" 
	                    			name="avocado" 
	                    			value="avocado" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://media.margriet.nl/m/dbxrrhg6898t_article_single.jpg/avocado.jpg" alt="extra_img"/>
	                    		<p>Avocado</p>
					        </label>
	                    </div>
	                   	<div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="ananas" 
	                    			name="ananas" 
	                    			value="ananas" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://ikkiesnatuurlijk.nl/wp-content/uploads/2018/09/iStock-934330238.jpg" alt="extra_img"/>
	                    		<p>Ananas</p>
					        </label>
	                    </div>
	                  	<div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="hummus" 
	                    			name="hummus" 
	                    			value="hummus" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://www.cookingclassy.com/wp-content/uploads/2014/03/hummus-31.jpg" alt="extra_img"/>
	                    		<p>Hummus</p>
					        </label>
	                    </div>
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="tomaat" 
	                    			name="tomaat" 
	                    			value="tomaat" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://media.margriet.nl/m/hjkr1im6ec2z_article_single.png/waarom-zijn-tomaten-gezond.png" alt="extra_img"/>
	                    		<p>Tomaat</p>
					        </label>
	                    </div>
                    </div>

                    <div className="row">
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="spinazie" 
	                    			name="spinazie" 
	                    			value="spinazie" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://www.allesoveritaliaanseten.nl/wp-content/uploads/2015/04/Spinazie-recepten.jpg" alt="extra_img"/>
	                    		<p>Spinazie</p>
					        </label>
	                    </div>
	                   	<div className="col item">
	                    	<label>
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="basilicum" 
	                    			name="basilicum" 
	                    			value="basilicum" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="http://simplethoughts.nl/wp-content/uploads/2015/07/simple-thoughts-basilicumplant-verzorgen-basilicum.jpg" alt="extra_img"/>
	                    		<p>Basilicum</p>
					        </label>
	                    </div>
	                  	<div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="pesto" 
	                    			name="pesto" 
	                    			value="pesto" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://www.recipetineats.com/wp-content/uploads/2019/02/Pesto_6.jpg" alt="extra_img"/>
	                    		<p>Pesto</p>
					        </label>
	                    </div>
	                    <div className="col item">
	                    	<label> 
	                    		<input 
	                    			checked={this.props.checked} 
	                    			type="checkbox" 
	                    			id="ui" 
	                    			name="ui" 
	                    			value="ui" 
	                    			onClick={this.props.handleClick}
	                    		/>
	                    		<span>✓</span>
	                    		<img src="https://www.babble.com/wp-content/uploads/2013/11/GettyImages-836586846-624x416.jpg" alt="extra_img"/>
	                    		<p>Ui</p>
					        </label>
	                    </div>
                    </div>
                </div>
            </fieldset>

		    <fieldset className="add-item">
				<legend>Zelf nog toevoegen</legend>
				<label>
					<input 
					onChange={this.props.addNewItem}
					type="text"
					value={this.props.currentItem}
					/>
				</label>
				<button 
					className="btn btn-add" 
					onClick={this.props.btnClick}
				>Toevoegen aan lijstje</button>
			</fieldset>
    	</form>
        )
    }
}
export default TostiForm