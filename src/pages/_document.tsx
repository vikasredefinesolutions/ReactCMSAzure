import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import { _globalStore } from 'store.global';

let storeId: null | number = null;

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;

    if (_globalStore.storeId) {
      storeId = _globalStore.storeId;
    }

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href={`https://redefinecommerce.blob.core.windows.net/rdc/${1}/store/${storeId}/css/${storeId}.css`}
          />
          <link
            rel="stylesheet"
            type="text/css"
            href={`https://redefinecommerce.blob.core.windows.net/rdc/${1}/store/${storeId}/css/custom.css`}
          />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
            integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: 'var klevu_addPageNumberToUrl = true,klevu_addSelectedFiltersToUrl = true; ' }}>

          </script>
        </Head>
        <body className="font-Outfit bg-white">
          <Main />
          <NextScript />
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `var klevu_cms_module_enabled = true, klevu_cmsSearchEnabled = true, klevu_current_version = '20.0.1';
        var klevu_storeLandingPageUrl = 'https://www.corporategear.com/home/Search', klevu_showQuickSearchOnEnter = false, klevu_searchQueryParam = 'q';
        var klevu_apiKey = 'klevu-14936563081965977',
            searchTextBoxName = 'txtSearch',
            klevu_lang = 'en',
            klevu_result_top_margin = '',
            klevu_result_left_margin = '';
        (function () { var ws = document.createElement('script'), kl_protocol = ("https:" === document.location.protocol ? "https://" : "http://"); ws.type = 'text/javascript'; ws.async = true; ws.src = kl_protocol + 'js.klevu.com/klevu-js-v1/js/klevu-webstore.js'; ws.charset = "UTF-8"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ws, s); })();`}}>

          </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
