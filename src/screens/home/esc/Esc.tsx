import CustomLink from "@/shared/ui/custom-link/CustomLink";
import { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Esc.module.scss";
import FullEsc from "./FullEsc/FullEsc";
import { ESC } from "@/shared/var/esc";
import clsx from "clsx";
import City from "@/screens/home/shared/City.tsx";

const Esc: FC = () => {
	return (
		<>
			<section className={styles.excursion}>
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<div className={styles.layout}>
							<h2
								className="block tracking-2% font-medium min-1200px:text-[48px] min-1200px:leading-[57.6px] max-1200px:text-[36px] max-835px:!text-[24px] max-1200px:leading-[43.2px] max-835px:!font-medium max-475px:!text-[20px] max-835px:!leading-[31.2px] min-1200px:mb-[28px] max-1200px:!mb-[24px]"
							>Экскурсии</h2>
							<div className={styles.items}>
								{ESC.map((item, i) => (
									<div className={clsx(styles.item, "min-1200px:py-[24px] max-1200px:py-[20px] max-835px:!py-[20px]")} key={i}>
										<div className={styles.subItem}>
											{/* <Image src={item.svg} alt={item.title} /> */}
											<item.svg />
											<p className="min-1200px:text-[18px] max-1200px:text-[14px] font-normal tracking-2% leading-[23px]">{item.title}</p>
										</div>
										<IoIosArrowDown />
									</div>
								))}
							</div>
							<div>
								<CustomLink path='/catalog'>Все эксурсии в <City /></CustomLink>
							</div>
						</div>
					</div>

          <FullEsc />
        </div>
      </section>
    </>
  );
};

export default Esc;
