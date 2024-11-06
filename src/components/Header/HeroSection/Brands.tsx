import { brands, brandsResponsive } from "./DataBrands"

export const Brands = () => {
    return (

        <section>

            <div className="bg-bg-primary flex px-24 justify-between py-9 max-[890px]:hidden max-[600px]:px-10">
                {brands.map((brand, index) => (
                    <img key={index} src={brand.image} alt={brand.alt} />
                ))}
            </div>

            <div className="bg-bg-primary hidden px-24 justify-between py-9 max-[890px]:flex max-[600px]:px-8">
                {brandsResponsive.map((brand, index) => (
                    <img key={index} src={brand.image} alt={brand.alt} className="h-12 w-12" />
                ))}
            </div>
        </section>

    )
}
