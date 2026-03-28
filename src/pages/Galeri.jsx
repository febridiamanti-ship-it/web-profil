import { motion } from 'framer-motion';

export default function Galeri() {
  // Daftar foto (Ganti src dengan path foto aslimu di folder public)
  const fotoList = [
    { id: 1, src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFhUVFRUXGBgYFxUVFhUVFRUXFxUVFRcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EADoQAAEDAgQDBQYFAwQDAAAAAAEAAhEDIQQSMUEFUWEicYGRoRMyscHR8AYUQlLhFWLxM3KCsiOSov/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACkRAAICAgIBAwMEAwAAAAAAAAABAhEDIRIxQQQTUTJxkSJCYaEUM1L/2gAMAwEAAhEDEQA/APmVFieotS1ASmWtIvqroaDOEKmfZcpOJN1HOlFFWcLUQ2XKasGzqmBZosuNbey70VxTjRIZTJCI13RGpssgVGFAFCZV6ZA2XPZ7q9MdE6AJ7UKe1VMqjRulQ7IQNVA9cqOhcQI696AGyUXImaTGwhugqxbJCgMI1QCbK1KnKlsaRRrwQQUrmAMpqoyNUIUJCVjoERmKJYbK7aMKziIUtlUKb6Kj6slde7oqNbCCQVSko2gmoVqdInRQ5FKFi4oHkgVV6HC8OcQZBjeNuqy6uDDHkPMgG0ESR8vRYwzRk2kzaeCUUnQDh+G9o8NG5XpauFZTljSXEiDFmjmP7lkUcQAewMvddx8Vo0C0Al2Yk7AAHzOi5fU8pST8fB0+mUYp/PyK1sQ2mOzTGb90Tf4BYz6L6hkmSU5j6ZJLpgbDWB80q1jeZPounFBRVrs5ss3KVPoGcAVEz7cclFdyM6gCpsCaa7ZKsKvN11HOgpauQDdQPV6Y3TTGUY6DCYYJCA+nyRqItdUI6B3ojLFdiLrkXQUGfcWCq4WUhQmdEUFnWMkWXWMOytCswx3JgVrU/wCUKNk25u4VQ2TMIATqMVqbE0+kEalRtYKWNIXZTVatKByTpEa2Sld06KRsVY26KTC6KcWV2jZJjSFS4nVWIjRMNoXUqYcwSAYGvIKHItRYsag3S9WpyR30kNlHoi0TTFQCUdgE3TJw1tDPp0QfYwVm5otY2hilw9xvBjn0WhSxtKkLAl3cD5bIGHMtg9NTaOQvdGr4QkNDWwdwIv1tdeflnGT4zejvxx4q4dmbjcZVqe88huzZi3cLINJjWm9/D7C9Rg+DTGbKO8X+qDiuEQ5xJytG+UGQNTGoWUfW4k+EdfYHgbfJu2Z736Ciy/OL9ySx9OsD23EdJgei16fFqFIwyXkfqcBfoANPVK43jj6jpgC1uzMf/M+sKsUsvPUNfL7Fk4Nbl+OjIp0HuBgEga2T2G4Y8icvp812hUeJkug95PRXq4/KCz2kSNHug+DZXRPJkeo0ZQx41uRYcNPIen1UWE/i8GATA/uI9IUVezm+SPew/BGFFao6mdwuhi9A4CQiMXIV2tVAdN+iNSMa6c1VoRmgKgIfMIYCuTaOtlehTVIC+TzV201ZGpMnZKyhY3Ku9nJMuwx1BR6OH6JWOhNlOyPh6aP7KO5dbrpZFjoVr0YC6yuANEzUw5PVCdhMqWgFH0y4yTbkqvpGbXT1QAC4XaGmyLHQm2kTqmKeGgSUycp01XC0mxWMmaxQlVE6BFDJGWTfbbxWjRw7fFN0sJFwRPWPmuTJlUTqhibMI4TJctnpBA8zBS9UAXymOTRbzK9ViMKYBf2r25XWfxHBub2YyxcxFuWYRI8Vzx9SmzWWGujElxExAG519SpRplxkwBO8X7pKuaL3nKKhvaIPx09VbB4EZu06PIyfBGTIknsUY76NjBcMzQZjqfomcLiqdI2bUqD92WGjrJj4KVqBAawHMNZY4WjXMNv4R3HDtaSXNkAe+bA7+9byC8KUnN/q2dDMnE4x9WqXU2TEgPdeAJuGSBz1BWFxKnUf79XOCZMOc6/UE/BPYrHhsQ4RcdluvTQeqzcXiS500xlB5Ek9Zn6L0/TY5RaaVIxyONUXo8PYNXZSLm3PRMGtTH6s0EREZuht81nswrj2nG25nkkuI1Rly0zIIlzhsJ93vXWsXOVN2YvLwVpUExvGSCcjiSZuZIHcJg/BZGVziXE9Sd0QhoE69BBt15JOtULiZ0jbQL0IY4w6PPyZZT7ZR+IAMAWUXRhTs0qK7Mj0xpiLuFlxlMfuWK/iZgjSzQLctb9U7gMeyCDqMx/3WJPdofNSrXZba8Gkyi3d3oumiNiq1MQ1uT+8wPvxCZpubsRb6E/AFWpCK0qS69iLgcQHtDo3I8QU4Ks6AeCOQ6M2nR6FOUGCOSYFM81wUHbKuVhVEZhkwKMdyqWOAvbrP8oYkblCV+R9GnQw4hVxBAsQfW6TZiX6FxA6ALtbLMgk85n5hTwaeyuSotTxDHSB9Pim6OV1h8lTC4am46n/ANdO+F3Esp0/eIgmNQPPkplNJ0WovsYblC48A2QqAYdG2O4gytKgWt/T/wBVlLJRpGFmW7A80B2CK231qc9e8AKtQNFyfIE+so99j9pGJ+XLbjVdZSdrutckcrLhc1TLLZSx0KsoMyy+rlPcT8ArYTifs/7/AAsR1kz6K78hvBPTkl6mHmwE6aQQJ7lzSUZakbptdE4j+JahM02BjgIMX06FZQr4h7s5lx3m48Rp4JvIxpOYyZ0ifsp5nEaYGUMB6xeecaFZNRgqhAatv9UjMw3C3m7hbyiVt4fhFFo9o5waG6/pHneT3LHxWOquBaHEDuAnw0WVUY86ku6GYWcsOTJ3KvsN5IxVIbx3EmZnBokbanQ7yZWfXrPdYAZY0EXPMkCTqmKGFcT/AKfoU+Gua33Q0C529TZacFD6VZPPl2zIw2Hvdh++q0szW6Na3wJPn/Kz8fx5jf8ATEnnNvOL+C87i8S+oZeZ1tsOkLVenlk3LSMpeqjj1HbNrjHFWZXNDi9xEdL6z9F5t9Vxtte3156ImTyXWAeXzuuzHCONUjhy5ZZHbFo2Qarr94+qYLIvMmZ+/NAlaWZFvbHnsPQQoqSOSiBlXjREoNme5UriB4pnhrJP3sk3qykt0UNcmJJhunT7hMMxbm9oG5Pmb/IkeKUcyCeirVfbxQI0P6i4NyiwJcbf3Ag/EeS9BwTiLYgmAA0SdS6HOdPkvKYap2xEaLQqUwDa1/ks5z46Lj8nt6GMaSQLwSNBtY6oHGcdDfZss46nSG6xI0Jt4Lxf5h47TXmQD6zPxKoOKvnNP7Z65RHrJJ6oTTK5mvVaSIv9ibSuML2aOINtDGhn5I/BqrajQHagNBOnauZ8mz4lPuwuazddo9I803KjWMeSsXxPGqrrNOWImIkmL7RHRVZxOqbkjyFu5P0eDO0y8zJsIPI79ya/o4b7zvp/lQ86XTH7MvJk/wBbrAQHNB5gNn6eiSr1qlQ5nOcTEeHcFuuwDHaB1tZhre4R3ItPhsSI2nTX7n0SeVIFjbPPUX1KZDmkiNrxbmNwvU0OON0NEzE62ja/Pos8Ydrn7QDcjSRtO/VM1/Z0/eIMTAb70nkCIGvNTKfLRpjjW7FcXxsk9mk0HeS53cRey0OGcYZUBbUe1rm8yQ092wK8zjKrqjpAyt0AH13SooQYhae2pRM/calo99heMU3HIxzSY5G4HKyaq1WlvujN3/fwXz/DC8E22NxB5SnXY+qIh5tPvQ4Gep10Wb9Mr0aL1DrZ6p1YRHZHcSUF1duhdPdPzSOF4ox4OjSBcENjrB3Q6uPpzGdnhlUrHXYnmbG81Iz2LxzQC4DQR3ErPq8UogiXA/DWD7qzq/4jAs1sgTBMx5SqUPhEPL/J6ARyVqnEGUx2nhvS0+ECV4yvx6o6e1AOzQB66pL8xN9ytPavsxeZ+D12M/ErQDkzO6kkD6+gXn8VjalUy909NAPDx3SXtflZWfVP399Faio9GcpuXYQN0k/VQubMA9/xS5fZAL4I5z5p7ZI66peNresz8EGpTMEjv8NB3oRrfFXdiItyRQA68gNvqPJDDLxNgrvfK45sd51TEVNHqPVRBL1E9gM4xnLTXb75p3h5ECPl98lyrw5zrkHTofmiYXCvECND6H/C53OLjVm8YvkLYtgzcuzy1KScwkQO/wDwtmpgnkNERAA9Aqt4a7U28W/HdJZopdg4NszcM1wcDt8EziKpv4JhuGBsHNB5yPJFLABDnt05qZZE3Y1DQo2sIdYRl17h6fys8+4Hdfv4LWOFY5vYqNki82jqLQUpUwuYeza4SBIM2IFjsqhJClFnOG4wscLTeYOhMEfNen/DOPyupsJuM3cdC0d9ivKs4e8Ee7p15dAvRcNwQJbmbNp/UJsYAcSAozyil2aYVJM9vTxlO5e8CDp709R9FSn+ImTEdnqNfovK4wZHuArlukh0PjS0tkf5XMF2nQ5wN9gW+U28zusYKEo2zaeWadI9RU4hSeQ68xIuCOltd1ncQxrnAhomZAAg20OaDfaw9Vl4YAl7PaEgQ0AFkgZGaS6NptOpVcHWPsv9QOPa7jmqAkQDNoCiM6f4/sctoawr3NDs0TrsZBgAADSJt3oVcWLyTJOpA2jYWCzzVcTd3TSPIrUfhczZcXWzAABtwDGa7uXxtOq6XkjF2YJNoz/zDWtlzpuB/E+Kzq/HGTYE8tunknOKYQVbFlVombNGscz3/BLuw7CwtgEQBNhEafqMGy1jlTIaYk/jbdA089fJL4bG53RAbvJvZd/JN5nbc/RdFBoMtBB6EE/D7harKjLY2ym8ujNzFnAnzAEd3VZ+La5rstyYHMjfTonGui/a310Ox0iVPaj7cfWyXMbSM5rXm0IrcG7dwT7n3A2GoBNxbREOXK2G6HqR4XQm2HFGfRwzJguPkQPMhdq4WHW22T1U5+3oR3hupOvimjhy8yXQe4jl0sht92HFeDEcCPC6qXr01HCDLrzuLGdtdbpKtwY5jfS2wB56FHJVsPbfgxcxMQD5Ib2GZIK2Tw3JJLoJItLo7iR3KpLBrUi4jqIuDO2nqqTQuPyZbKea0tHebefiiHBH9zI/3eS0WGmIiqYBGgb1nfu9Veli2t/Xm11JAGugB67/AETsfFGQ8ZezmmNeWwtzQ3ElPNpUpJLwZ1n5SfUo/wD4tiPQfZUOX8EUYuV3L0Ci2Qae7vX+VEc38BQvVxr26EnxP1V8LVcYOY3M77f5SOKqTdPYJ4geKlwSXRonstVxDxl7Z90WJ5AIbcY7mfM/FCxNTtW5R47pN+iFiT8CcnZptxTv0mCd0U4wht3SVl4cdoXTdSnqolijZSm6C1sc8tIBLcrf0yNpvzSWIqk05nWOp5pxoEON9PkkSbAdSiCS6QpSYPD0ySPvQL03AaRfUYC5wbfQkaC8RprHilvw/gQ45naAGx3DmkCPGFt8Op+wa2feaD5ugn4Qlki5muJbtm9S4XRObs5SeV9I+gS9P8POLjuLmfS/kh0+MHUgRpGhBGpncpn+sg/qcOgPqsVjnHo6Je3IWfwMNBbLZIykbmzAPRo8knicMaTSA393jmeH2/8AVN1MfFzUDjtMhwjvUdjw6QRII3++iFhrbJck9IyKPbklt9BqdLmyHXILeoPjCeouDXxo1x53BjSfNFxWDbUJLSWnWXe6Y5xcaLe0nsyUG1o87xDDGs33r5m333m/iUlV/MBhZFoAtybuOtlq1XOpuyuEEeR5X3C5+YkrZRVGT7PO/l6wGjo18p/lEwWcu7Rt1tfa/ivS4cBxvoNep5KPwrJEMnkBJuPsKhcTOY1pd78iT4WgSIulcTicjoEm2siDc7QvZ4f8MCCaupEADUTrJ+Sz8R+Emz2XECN76T/CzcojakeY/qIJB0I0MDXrGqOMdIaJbbmBE92y03fhJ5IDSDO/K/Luv4FZ+L4BVYfcJHMCQhOHSZL59spVfncMrIG4tBuSd1avXAJAlo6HwSP5cg72XPZk3KqiXJmiziMCL2Gu9xG+iUq41xMyT33NuZQy1QsTDkw1DGGD2gL2F563iyN+eA3adDdua0aCYg3SRp6KjmXRoOTNKjiQ6PcuRYtI5zoO7TomKNJh98De4/5XII7vNZTHubdpInkuvxFT97vNA+SLe2YHEOY23Q3/AJRg6kf0j08rpRxm519T3oT2qaJse9nT3aPIfRcWZJ5qJ8X8hZZ4RMM+LoJRKbTeNh6KgOArrm2TVfBFpYN3/HMRHw803Q4YZdmHZaT4wHGf/mPFAGdRAnWFp4HDOquEC2aNbjsl3wCtheF+0phzdTm16SG+q9Bw2gWNByw4tbP/ABED0hS48mNGbheBFzi0kwAZtuHOaP8ArKNjfw+1n/kNxLQRpHZgnukA+K2RW6LoxG0WPO6uOJlWjEaQxoDdgBpOgtP3uuPxGbxi3UmI9VtvpsIvTb5R8FKWVvutAPQK1hbH7lGPi8HUp2c030iSJN471xtGpeWut0K9C2u79RcB4qVKgmzp6qvaXyLmzzdTB1YksfExvqUv7dwt5yvb4Sswav8ATXuS+PwtKqZiDubSRy0ssWqdFpeTyXtS4hrRLjy57L0lHglY3luhtmFut9ZTeEwdNnutaOsX81pMg8vVZTZrjTPI4zhVcXdTJB5EOgdYOqa4T+HWkF1TMAdG6EdTK9CaTZmR5rtZ4O/p8wk5OqRagrtmfgvw6xrpMvboAQInmVsnDhrQQ0DoLR5W2Sf5h3NBfVJ3WUub8lpQXgdf1Lh4g/BBcJ0efH/KUdVMagxqguxYBixE+KlOQOEWOuo6ze3NLP5cu5JiHGzvA7I/5J4BOojU/d1MsiXY1ib6A4nC03znaD1IE+eqxcXwBp9x0dDceafq1o187qjeJHa/eJWqm/BjLEr2YOJ4NUZJIkc239FnyOS9pT4gTqweRCTx3D6dS+TKTuLX689U1mX7jN+nf7Ty0BVy3A+yncbwqpTvEjmL+Y1SQctk01aMJRcXTLFu33C44KFw1QXynQiVbIbnT3qP2uh51VCOFqihqFRMDdq8KEWOpZ4QIdHoUzgcO0MhzbnNP/I6KOrHmp7bqmolWOPYxxaSDLTI8oVzUCQ9qrCqqoVj2HDWtAAsFd1Y7H1SAqombmU0gG24nqj06m6yS5EpVrJga7MSr+2CyfaIjayRRu08SEtXgyZA7gFlnFIjcROqFodjVNkamfFM08o1uPgsv2srrapTbsDWDQNF0Vy3dZP5vkqvxMqXGylKjXOOCEcesp7911jpScYhzZovxpVDjCkw6FxtRZSSLjI0XOYRJqEHlE/MIVPDvf7na6Xn4ITY1snKOMy+6SO6FyZHKP0nXjjGXZm4unVpGHNIKJh+MVAIE+q1HY8k5tf3Tus3GV25iQA0u3ET1AjQLJTc9TiaPHw3GQ7S4q2oMrmgzebT5pg8Mw9RsA5X6gj5g6rzdOvTBuZ8x6pnBPaXXcbagmZWGbA47g2qNIZFPUqYCrQe0m9gY5FRuPcOyb99/mterSZmhoJady6DPMRaFfGcGaWSX6aQJPd2tfNJeshpTG/TyX0MzMNiC7aUvjuFMcZIym8wInqdlyphSCAw+e5VX4uow5XTbn/K6Yt3cGYSSqsiMjH8NcwZrFoiSJ1O5BJ3WcvTVKzXggiJELIxuFyRvI94WE7j0XXjyN6l2cOXEluPRnBqqQmXUrSLpZy2swK+CisR1UQBsgqwcgtcpmWgBsys1yCrBydgFzojTzSbqiu16BDLnqoehF64Hp2Mb9qu+0SmZdzJAMCoumogFygRYxr2iIyoky5da5IYzUfK5k6pfMiiolYHfaqe2Kq6ChuMJWAyyqil8pHOrNepZaYz7QhHpYgtvKRbVldqYiwEC2+/cs2rNIyrY7VrlxkDyEINSq48jHPX1SRqqNqqeFD91sce+RBbB7v4XcOWyNQe+yVdXVG4g7FZyx2jSOSmempVabhD7GLHW/VRuHqmQwty7lriLcy0/JYtKobTv3JmhxN1MwIXmT9NJfRv7noRzxfZY1i2RUaeQdr3RZI1K7ZjX/cNfotfD4imXFxsTqP0nvCz69Gi8kCGGbGf50WmKST2micsW1poE3DMM9oDcfTVVrYHM0tkkdwkRoQZVDw+o07HlvZDbiXg3HmDddSt7jKzlaS1KNGXiKDma6HQ/ehQKkO6H4rfpVZkZW31Bn5pHEcMvY5RyN79DyXTHJ4kck8PmJimVExUw7gSC2/dKi2tGNMbY5ECWY5XzytCQhKkqjSqygAgV5QQ5dD0AFDl1pQQ5dzosYcuhQlDzKhekAyCutclfaKwqIAO56qHIJcpmQAVz1dtRLEruZIY2Kio+ogZlYFIC7XrpegyrtegaLBy6XITnKCoEh2EVHFdDlHFICociU9dUuXLuZJoaZpsrB1hY965icO9vaMH79VnB6dw/EXNsbjksJQktxOiE4vUgTcWeZV6WZxiQUWs6k8Zi0AgagxPhokqUn3Ce6yEk11QNtPuzWo8RdSMEJXE8QzEm1/7R8dUOliXaG/ejVcLIzBojfKfiFmoQjK2tmjyTlGk9FKWLaABlHmU6cVTLcuWO4n5rGe8bFdDytJYk9mUcrWjfpexgdn1P1XVge3f1UWf+O/n+zX/ACF/yvwZzXIrXKKL0Tzi2ZVlRRICZlCVFEAdzqB64ogDudSVFEDOZl0FRRAHQVJXVEgOZlMyiiAJmUD1FEAdzrmddUQM7NkOVFEAWD1YuKiiQFMy4CoogDuddD1FEqHZ11S0IcqKJDs0uGPD5a89xRnSOydlFFyz1Ojrh/rszcS2DMIbCOqii6I7RzS0yxrdVFFEUKz/2Q==", title: "Web Development" },
    { id: 2, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-die5F_rXpc3O6V5DAgO-_8ANb-PqLiK6tA&s", title: "Project BAKOS" },
    { id: 3, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZYzOxNuFmWdLVRki7pmwgpkUfGDHjSeMxw&s", title: "Kampus AMIK" },
    { id: 4, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWxAXusIngKoXUPbCYix3-wFaQFMFzaWqWg&s", title: "Coding Session" },
    { id: 5, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMgRF-oH81A2Fwc6p4zLNzQIxE6a_YVJCgg&s", title: "UI/UX Design" },
    { id: 6, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqM0qxvGCKvCep2mCq9nBjHtBEW8dbvxprFQ&s", title: "Traveling" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 relative overflow-hidden">
      <div className="emerald-spotlight"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Galeri */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Digital <span className="text-em-accent">Gallery</span>
          </h1>
          <p className="text-em-muted mt-2 font-medium">Dokumentasi perjalanan dan aktivitas Febri.</p>
        </motion.div>

        {/* Grid Foto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fotoList.map((foto, index) => (
            <motion.div
              key={foto.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 shadow-2xl"
            >
              {/* Overlay Glow saat Hover */}
              <div className="absolute inset-0 bg-em-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              
              {/* Gambar */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={foto.src} 
                  alt={foto.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>

              {/* Label Foto */}
              <div className="p-4 bg-neutral-900/80 backdrop-blur-md border-t border-white/5 relative z-20">
                <p className="text-[10px] font-bold text-em-accent uppercase tracking-[0.2em]">
                  {foto.title}
                </p>
              </div>

              {/* Efek Garis Menyala di Bawah */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-em-accent group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}