import Link from "next/link";
import Image from "next/image";

export default function LogoHeader() {
  return (
    <Link href="/">
      {/* <Image
        className="w-44 pt-1 desktop-s:pt-0 desktop-s:w-[225px]"
        src="/final-logo-thinkey.svg"
        alt="Logo of Thinkey school"
        width={215}
        height={67}
        priority={true}
      /> */}
      <svg
        width="215"
        height="67"
        vectorEffect="non-scaling-stroke"
        viewBox="0 0 215 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="a" x="0" y="0" width="215" height="67">
          <path d="M0 0h214.417v66.306H0V0Z" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <path
            d="M144.703 15.693V42.36h6.085V31.216s6.477 5.228 9.421 11.144h7.311s-6.575-10.409-11.776-14.33c0 0 10.206-10.605 11.138-12.337h-7.164l-8.93 10.033V15.693h-6.085Z"
            fill="#002A54"
          />
          <path
            d="M171.985 30.186s.442-3.872 3.803-3.872c3.361 0 3.803 3.872 3.803 3.872h-7.606Zm3.926-8.529c-10.894 0-9.814 12.451-9.814 12.451s.098 12.206 17.665 7.5l-.736-4.706s-9.716 3.53-11.041-2.794h12.905s1.914-12.451-8.979-12.451Z"
            fill="#002A54"
          />
          <path
            d="M185.137 22.098h6.133l4.269 13.236 3.828-13.236h5.986l-5.005 14.805s-4.269 12.107-9.078 12.205c-4.808.099-6.249-.637-6.249-.637l.999-4.559s5.005 2.5 6.673-2.45l-7.556-19.364ZM66.09 59.357a6.288 6.288 0 0 0 3.007.793c1.458 0 2.27-.682 2.27-1.696 0-.94-.628-1.493-2.215-2.064-2.047-.737-3.357-1.825-3.357-3.612 0-2.028 1.697-3.576 4.39-3.576 1.347 0 2.344.295 2.99.627l-.554 1.825c-.443-.24-1.31-.59-2.472-.59-1.44 0-2.067.774-2.067 1.492 0 .959.72 1.401 2.38 2.046 2.16.811 3.21 1.899 3.21 3.686 0 1.99-1.512 3.742-4.722 3.742-1.31 0-2.675-.387-3.358-.793l.498-1.88ZM78.1 51.303H74.56v-1.898h9.39v1.898H80.37v10.524H78.1V51.303ZM92.362 56.316h-4.686v3.65h5.24v1.86h-7.509V49.406h7.232v1.861h-4.963v3.207h4.686v1.843ZM100.96 56.593l-.978-3.06c-.24-.755-.442-1.603-.627-2.322h-.037c-.184.719-.369 1.585-.59 2.322l-.96 3.06h3.192Zm-3.56 1.714-1.07 3.52h-2.344l3.985-12.422h2.897l4.04 12.422h-2.435l-1.125-3.52h-3.949ZM117.085 56.758c-.074-1.603-.166-3.538-.147-5.234h-.056a63.308 63.308 0 0 1-1.476 4.774l-1.808 5.381h-1.752l-1.661-5.308a60.701 60.701 0 0 1-1.254-4.847h-.037a271.43 271.43 0 0 1-.221 5.308l-.277 4.995h-2.122l.83-12.422h2.989l1.624 4.994c.442 1.456.83 2.93 1.143 4.313h.056a60.397 60.397 0 0 1 1.236-4.331l1.716-4.976h2.952l.719 12.422h-2.214l-.24-5.069Z"
            fill="#002A54"
          />
          <path
            d="m125.794 57.993-.332-8.588h2.398l-.332 8.588h-1.734Zm.849 4.037c-.812 0-1.384-.608-1.365-1.438 0-.847.571-1.437 1.383-1.437.849 0 1.384.59 1.402 1.437 0 .83-.553 1.438-1.402 1.438h-.018Z"
            fill="#D32828"
          />
          <path
            d="m41.614 32.836 2.196 5.486-2.196-5.486ZM46.108 44.8l.13-.176.005-.006-.136.18.001.001ZM38.06 24.174l.039.04-.04-.04ZM37.61 23.825h.002l-.007-.108-.063-.063.069.17ZM48.873 35.664l-.112-.213-.09-.091c-.694.405-1.136.91-1.314 1.505a2.186 2.186 0 0 0 .145 1.578l.05.057c.29.221.434.469.44.757.013.746-.897 1.503-.906 1.51l-.041.048c-.342.57-.03 1.136.229 1.41-.055.256-.377.867-1.137 1.914l-2.032-5.076 2.193 5.48c.896-1.214 1.353-2.018 1.353-2.387v-.081l-.06-.056c-.022-.02-.523-.483-.244-.99.168-.144 1.028-.925 1.013-1.777-.007-.391-.192-.734-.55-1.018-.062-.132-.281-.664-.098-1.269.166-.547.612-1.013 1.325-1.386l.005-.003-.006.003-.163.085ZM41.146 51.96v.003l.249-.031.006-.001-.037.004c-.073.01-.145.016-.218.024Z"
            fill="#002A54"
          />
          <path
            d="m43.92 38.903-.085.477.615 1.538 1.429 3.57-.203.267.05.102c.884 1.806 1.032 3.275.44 4.367-.65 1.2-2.186 1.976-4.566 2.31l-.04.217.094.145c2.5-.351 4.128-1.19 4.836-2.496.64-1.18.512-2.728-.382-4.6v-.003l.134-.178.057-.075-.001-.002-2.193-5.479-.186-.16ZM45.217 18.491l-1.62-.828 1.62.828ZM44.73 13.647l-.012.017c.036.13.074.26.105.394l-.094-.411ZM44.594 15.17c.096.963.362 2.22.504 2.847l.421.215.024.071.002.008c-.02-.084-.459-1.918-.583-3.151 0-.017.012-.395-.122-1.019l-.294.435c.054.36.047.573.048.595ZM42.668 16.699l.776-1.15-.776 1.15Z"
            fill="#002A54"
          />
          <path
            d="M30.952 3.488c10.643 3.369 12.983 8.445 13.494 10.578l-1.002 1.483-.776 1.15-5.58-6.294 5.703 6.432.155.078.015.009 1.586-2.348.294-.435v-.002l-.017-.077v-.004c-.031-.133-.07-.264-.106-.394C42.99 7.469 34.512 4.199 30.69 3.02l-.042.125.304.342Z"
            fill="#002A54"
          />
          <path
            d="m36.935 10.232.108.122.045.05-.016-.203-.137.03ZM36.523 10.325l-5.946-6.703 5.945 6.703ZM37.128 11.006v.002l5.205 5.87-5.205-5.872ZM43.576 38.73l-.075-.19.075.19ZM43.831 39.379l.003.008.001-.007.084-.477v-.001l-.088.477Z"
            fill="#002A54"
          />
          <path
            d="m43.957 38.688-.135-.336.135.34-.039.21h.001l.186.16.003.003-.151-.377ZM34.145 30.054l3.431-5.803-3.432 5.803ZM34.456 30.253l9.355 8.069-2.196-5.486-3.057-7.635-.664-.668 5.31 13.265-8.748-7.545ZM42.753 17.232l-4.693 6.944 4.693-6.944ZM36.734 10.656l.532 7.975-.532-7.975ZM37.088 10.405v.001l.126.143-.115.025.387 5.807-.358-5.373v-.002l5.205 5.871.122.137-4.485 6.636 4.66-6.895.16.082-5.702-6.432ZM36.935 10.233l-.248-.279v.001l.326.367.03.033-.108-.122ZM42.79 16.836l.156.08-.156-.08Z"
            fill="#002A54"
          />
          <path
            d="M49.16 35.106a6.357 6.357 0 0 0-.15.072L38.18 24.296l-.083-.082-.038-.038 4.694-6.944.844.431 1.62.829c1.23 3.738.452 5.343.444 5.358l-.02.038v.044c-.064 4.368 2.93 6.744 2.96 6.768l.042.024c1.117.47 1.936 1.526 1.948 2.512.01.799-.484 1.446-1.43 1.87Zm-.35-4.712c-.24-.196-2.842-2.428-2.801-6.417.13-.29.755-2.005-.463-5.666l-.003-.007-.024-.072-.42-.215-2.138-1.093-.016-.008-.155-.08-.16-.081-4.66 6.895.03.448.067.048-.058.097.022.328-.153-.107-.02.034.035.035.665.668L48.67 35.36l.09.09.112.214.163-.085.006-.003c.086-.045.176-.09.272-.134 1.073-.482 1.657-1.267 1.646-2.21-.014-1.138-.897-2.3-2.15-2.837Z"
            fill="#002A54"
          />
          <path
            d="m37.485 16.381-.386-5.806-4.747 1.061 4.382-.98.531 7.975.34 5.087.006.108.388.272-.03-.448-.484-7.269ZM37.088 10.405v-.002l-.045-.048-.03-.033.075.084ZM37.879 24.464l.152.107-.021-.328-.131.22ZM27.185 7.764l1.577-4.91-.015-.004-1.562 4.914Z"
            fill="#002A54"
          />
          <path
            d="m29.215 2.595-.073.282-.583 1.816.56-1.744c.416.112.796.22 1.154.33l.304.343 5.946 6.703-6.873 1.538-.32-.59.415.765-.026.187 2.633-.589 4.747-1.062.115-.025-.126-.143-.075-.084-.325-.367-2.656-2.994-3.08-3.473-.304-.342.042-.125-.18-.056c-.449-.138-.93-.275-1.472-.419l-.006-.002.007.003.176.048ZM31.06 35.27l2.296-3.883-.002.001-2.294 3.882ZM34.143 30.053l-.47.795h.002l.47-.794h-.002ZM43.83 39.378l.088-.476.039-.21-.135-.34-.011-.03-9.355-8.07-.191.323 9.236 7.966.074.188-.41 2.232-1.898 10.34-10.091-15.503L41.559 51.75l.04-.217.907-4.937 1.325-7.218ZM23.735 21.596l.04.069.04-.133-.08.064Z"
            fill="#002A54"
          />
          <path
            d="m37.611 23.826-.001-.001-5.344-3.753-3.302-2.32-.025.185-.166.132 8.802 6.183-3.431 5.802-.47.794h-.002l-2.37 1.027 2.464-1.067.242.14-.068.176-.093.157.418-.705.19-.323 3.403-5.755.02-.034.13-.22.058-.098-.067-.047-.388-.273ZM30.898 36.268l.07-.117-.06.1-.01.017Z"
            fill="#002A54"
          />
          <path
            d="m33.848 31.28.093-.156.067-.176-.242-.14-2.463 1.067-.951.411.064.11.024.02.008.037.09.154 2.816-1.219h.002L31.06 35.27l.003-.005.095.454.016.075.003.004 2.672-4.517ZM30.898 36.267l.01-.016-3.553 6.008 4.52 18.515-4.52-18.514 3.543-5.992ZM27.086 42.715l4.134 16.93-4.134-16.93ZM32.459 63.59l-.307-.129.307.128ZM31.176 35.798l-.003-.004.002.007-.208.351 10.057 15.451c-2.905.307-5.9-.123-5.931-.127l-.152-.022-.05.144c-.602 1.74-.281 3.004-.273 3.022.05.738-1.127 2.09-1.585 2.548l-.043.044-.728 5.14.235.966.841-5.934c.31-.318 1.714-1.812 1.642-2.823-.003-.011-.288-1.138.213-2.7.661.085 3.352.386 5.953.098.073-.008.146-.015.218-.024l.037-.004.256-.032-.003-.004-.094-.145-10.384-15.952Z"
            fill="#002A54"
          />
          <path
            d="m31.063 35.265-.003.005.097.45-.094-.455ZM22.255 26.628l-1.366 4.606 1.366-4.606ZM22.331 26.367l-.039.134.04-.133ZM22.68 26.49l6.971 5.323-6.97-5.323ZM26.816 42.446l-2.707-4.665 2.707 4.666ZM30.441 32.414l-.025-.02.034.06-.009-.04Z"
            fill="#002A54"
          />
          <path
            d="m31.06 35.27-.5-2.299-7.992-6.103 7.54 5.758.071.329.604 2.782L27.079 42l-.048.082-1.608-2.772 1.609 2.773.086-.146.209.208.028.114 3.553-6.008.058-.099.208-.352-.001-.006-.016-.075-.098-.449ZM23.957 22.33l-1.25 4.069-.012.04 1.262-4.11Z"
            fill="#002A54"
          />
          <path
            d="m30.537 32.607-.09-.154-.032-.056-.064-.11-6.137-10.6-.08.063-.107.35 5.624 9.713-6.97-5.324-.113.379 7.992 6.103M24.028 21.365l-.105-.181-.108.35.213-.17ZM22.292 26.5l-.038.127.077-.257-.04.13ZM13.967 28.309l2.188-4.752-2.188 4.753v-.001ZM20.97 16.268l-2.593 1.583 2.593-1.583Z"
            fill="#002A54"
          />
          <path
            d="m29.238 11.876.125.232-.595 4.355-.174 1.277-4.566 3.625-.212.168-.04.132-.698 2.271-.572 1.866-2.03-5.184 2.246 5.736-.014.045 1.25-4.07.07-.229.107-.35.08-.063 4.558-3.618.166-.132.026-.184.177-1.298.578-4.23.025-.187-.414-.766-1.81-3.347-.063.198-1.31.05 1.066-.04 2.024 3.743ZM21.153 16.589l-2.62 1.599 2.62-1.6ZM19.578 28.27l-.717-2.301.717 2.301ZM15.355 21.647l.303-.546-.304.548 1.22 1.878-1.22-1.88ZM22.332 26.37l-1.81-4.625 1.81 4.624ZM25.39 7.859l-1.477-2.623 1.476 2.623ZM23.643 4.003l2.536-1.769-2.536 1.769Z"
            fill="#002A54"
          />
          <path
            d="M27.02 2.416c.622.147 1.19.29 1.727.434.005 0 .01.002.015.004l-1.577 4.91-1.396.054-1.965-3.492 2.85-1.987c.114.023.228.049.346.077Zm-1.042 5.738-.278.036.449-.017 1.309-.05.063-.198 1.038-3.232.583-1.816.073-.282-.175-.048-.008-.002a54.493 54.493 0 0 0-1.927-.487l-.022-.005-3.259 2.273 2.154 3.828ZM26.669 1.962l-.047-.01.047.01ZM25.848 60.424l-2.776-9.542 2.776 9.542ZM31.876 60.774l-4.52-18.515-.029-.114-.208-.208-.087.146.212.365-4.154 7.023 3.997-6.756 4.134 16.93.823 3.371-5.759-2.409-2.927-10.064 3.06 10.52 5.734 2.398.307.128.116.05-.078-.321-.235-.966-.386-1.578ZM22.828 49.188l.88-1.487-.88 1.487ZM14.473 40.72l.001-.04-.02-.057-.031.043.05.054Z"
            fill="#002A54"
          />
          <path
            d="m21.092 31.844-.006.023.01.033-.035.05-.113.38 3.162 5.451 2.707 4.666-3.109 5.254-.88 1.488-2.445-2.638 2.486 2.68.084-.08.073.25.064.07 4.154-7.023-.212-.365-1.608-2.772-4.332-7.467ZM14.875 2.003l.034.01c.215-.06.43-.124.647-.175l-.681.165ZM17.59 2.387l-1.235-.349c2.979-.601 6.277-.536 9.824.196l-2.537 1.769.063.11.041.012.013.085.065.116 3.259-2.273-.411-.09-.004-.001-.046-.01c-4.006-.873-7.71-.915-11.014-.125l.043.012 1.94.548ZM23.069 49.55l-4.09 3.941 3.79-3.651.303 1.042 2.775 9.542-9.804-4.102-.166.16-.063.124-.166-.05 10.331 4.323.126.053.312.13-3.06-10.519-.288-.992Z"
            fill="#002A54"
          />
          <path
            d="m22.868 49.232.158.17-.073-.252-.085.082ZM25.7 8.19l.278-.036-2.154-3.828-.065-.116.154 1.025 1.476 2.624-.896.116-.165.022-.238-1.582.271 1.807-.054.15.04-.006L25.7 8.19ZM23.982 8.185l-.298-1.989.298 1.989ZM13.2 2.569l.002.002c.066-.025.132-.053.199-.078l-.2.076Z"
            fill="#002A54"
          />
          <path
            d="m15.597 2.207 7.82 2.208.267 1.781.299 1.988-.899 2.474-1.901 5.236.239.422 1.943-5.35.942-2.594.055-.15-.272-1.807-.177-1.18-.154-1.025-.013-.085-.041-.011-.066-.099-6.048-1.628-1.94-.548-.043-.012h-.003l-.046.01-.004.001c-.216.051-.43.115-.646.175-.459.126-.912.267-1.356.43l.182.32c.607-.219 1.232-.406 1.862-.556ZM21.256 16.771l.114-.315-.218.133.104.182ZM14.012 55.873l.143.06-.143-.06ZM15.878 56.48l.166-.159 2.936-2.83 4.09-3.94.05-.049-.03-.031-.064-.07-.158-.17-2.485-2.68-5.485-5.917-.055.077-.012.394 5.398 5.822 2.374 2.56-4.11 3.96-2.82 2.72-1.285-.536.065-2.122-.077 2.516 1.272.53h.001l.166.051.063-.125ZM20.889 31.234l-1.642-5.267 1.275-4.222 1.81 4.624-.077.259-1.366 4.606Zm1.792-4.745.015-.05.012-.04.014-.045-2.245-5.736-1.616 5.351.717 2.302.388.004 1.12 3.591.006-.022 1.477-4.976.112-.379ZM20.827 32.278l.07.224.05-.172.114-.38-.234.328Z"
            fill="#002A54"
          />
          <path
            d="m13.385 2.893 7.586 13.375-2.593 1.582-1.787 1.09-1.67-4.592 1.776 4.883-.064.116 1.9-1.16 2.62-1.598.218-.133.097-.06-.046-.08-.24-.422-7.447-13.13-.182-.322-.002-.004-.147.054-.004.002c-.066.024-.132.052-.198.078-.745.285-1.48.626-2.194 1.018l.126.348c.73-.404 1.486-.755 2.25-1.045ZM10.977 3.607c-.053.029-.107.056-.16.086l-.093.057v.003c.03-.018.062-.039.093-.056l.16-.09ZM21.06 31.95l.035-.05-.01-.033-1.12-3.592-.387-.004-5.088-.06h-.072l-.118.257-1.43 2.86 1.376-2.751.387.004 5.06.06.755 2.423.24.771-5.976 8.423.133.362-.002.09.054-.076 5.93-8.356.233-.329ZM9.33 4.636l-.004.002-.08.057v.002c.026-.02.052-.039.08-.058l.004-.003Z"
            fill="#002A54"
          />
          <path
            d="M9.619 4.883a18 18 0 0 1 1.19-.757l5.483 15.073-1.144 2.06-.02.038-5.25-8.07 5.476 8.422.304-.548.974-1.754.065-.116-1.776-4.883-3.787-10.41-.127-.348-.03.017-.16.09-.094.056c-.372.213-.746.449-1.117.698l.048 1.663-.035-1.23ZM12.87 31.327l1.43-2.859.119-.258 2.156-4.683-1.221-1.878-5.476-8.421-.02.053.005.2-.076-.018-.073.188 6.44 9.906-2.186 4.752-2.105 4.208.138.375.051.067-.015.03.001.003.832-1.665ZM5.698 24.564l-.147-.197.149.2 6.101 8.06-6.103-8.063ZM5.354 23.852l1.961-5.046-1.96 5.046ZM5.133 24.424l.043.056-.03-.09-.013.034ZM11.623 33.002l-1.348 2.841 1.348-2.84ZM14.83 41.105l.013-.394.003-.091-.134-.362-.845-2.298-1.83-4.968v-.002l-2.038 4.295 1.817-3.829 1.783 4.846.854 2.32.022.058-.002.04-.382 12.537-.068 2.222-7.334-3.07c3.062-8.422 2.215-12.046 2.178-12.194 0 0-.027-.115-.096-.342l-.23.485-.143-.442v-.002c.078.251.11.38.11.387.01.036.86 3.735-2.226 12.147l-.06.166 7.79 3.26.141.059.223.093.076-2.517.379-12.404Z"
            fill="#002A54"
          />
          <path
            d="m11.863 32.517-.004-.012-.058.122.2.265-.138-.375ZM5.768 30.806l-.393-5.987.393 5.987Z"
            fill="#002A54"
          />
          <path
            d="m6.386 34.596-.612-9.32 5.848 7.726-1.347 2.841L8.6 39.37c-.332-.934-.99-2.54-2.215-4.773Zm2.155 5.762.23-.485 1.228-2.588 2.038-4.295.014-.031-.05-.068-.2-.264-6.102-8.06.031.04.665 10.132-.268.134-.093-.152-.003-.006.003.006c1.445 2.63 2.101 4.381 2.363 5.193v.002l.144.442ZM3.403 11.661l.36.08c.377-.823 2.006-4.03 5.495-6.599L9.393 9.9l.088 3.119.372.083-.199-6.987-.047-1.662V4.44l-.277.196-.004.003c-.028.02-.054.04-.081.058-4.19 2.995-5.844 6.939-5.91 7.1l.003-.007.065-.129ZM9.859 13.28l-.072.183.077.018-.005-.201Z"
            fill="#002A54"
          />
          <path
            d="m3.606 12.084 5.817 1.298-2.108 5.424-1.96 5.046-2.928-8.774a26.97 26.97 0 0 1 1.179-2.994ZM2.414 15.04l3.093 9.27.044.058 2.001-5.152 2.162-5.564.073-.188.07-.182.021-.053.044-.112-.07-.015-.37-.083-5.72-1.277-.36-.08-.064.129-.003.007c-.035.07-.624 1.268-1.224 3.063l.262.088.041.091ZM5.176 24.48l.153.458.046-.119-.005-.078-.203-.288-.192-.576.17.513.031.09Z"
            fill="#002A54"
          />
          <path
            d="m2.238 15.675 2.736 8.202.193.576.203.288.005.078.393 5.987.2 3.04a65.838 65.838 0 0 0-2.836-4.509c-2.993-4.381-1.934-10.241-.894-13.662Zm3.89 19.198.268-.134-.665-10.131-.031-.042-.15-.2-.043-.058-3.093-9.269-.04-.09-.263-.09H2.11l-.058.177C.95 18.418-.414 24.8 2.827 29.545a63.196 63.196 0 0 1 3.204 5.17l.003.006.093.152ZM26.987 14.98a1.402 1.402 0 1 1-.002-2.803 1.402 1.402 0 0 1 .002 2.804ZM26.88 7c-3.714 0-6.725 2.95-6.725 6.588 0 .463.05.915.142 1.351l-.011-.008-8.202 8.129v5.31l8.202-.037v-2.651h2.756v-2.885h2.657v-2.73c.384.067.777.108 1.18.108 3.716 0 6.727-2.95 6.727-6.587C33.606 9.95 30.595 7 26.88 7ZM57.621 15.693v5.294h8.047V42.36h6.02V20.987h7.981v-5.294H57.621ZM81.502 15.693V42.36h6.085V30.987h9.944V42.36h6.02V15.693h-6.02v10.196h-9.944V15.693h-6.085ZM107.541 15.693v7.516l6.346-1.764v-5.752h-6.346ZM113.887 23.602l-6.346 1.764V42.36h6.346V23.602ZM117.764 15.693V42.36h5.986V25.137l12.022 17.223h4.858V15.693h-6.036v15.523l-11.972-15.523h-4.858Z"
            fill="#002A54"
          />
          <path d="M107.533 15.66v8l6.35-1.876V15.66h-6.35Z" fill="#D32828" />
        </g>
      </svg>
    </Link>
  );
}
