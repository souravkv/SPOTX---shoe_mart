import {
    NavBar,
    Hero,
    PopularProducts,
    SuperQuality,
    Services,
    SpecialOffers,
    CustomerReviews,
    Subscribe,
    Footer,
  } from './components';
  
  import {BrowserRouter , Routes ,Route} from 'react-router-dom'
  
  export const Home = () => {
    return (
  
      
      <main className="overflow-x-hidden">
        <NavBar />
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffers />
        </section>
        <div className="padding bg-pale-blue">
          <CustomerReviews />
        </div>
        <section className="padding-x sm:py-24 py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    );
  };
  
  
 