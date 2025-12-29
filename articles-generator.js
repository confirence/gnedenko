// articles-generator.js - генератор HTML для статей

/**
 * Генерирует диапазон страниц
 */
function getPageRange(startPage, pagesCount) {
    const start = startPage + 1;
    const end = startPage + pagesCount;
    return `${start}-${end}`;
}

/**
 * Генерирует HTML одной статьи
 */
function generateArticleHTML(article) {
    const { id, title, authors, text, startPage, pagesCount } = article;

    const pageRange = getPageRange(startPage, pagesCount);
    const authorsString = authors.join(", ");
    const pdfLink = `./Journal/RTA_2_2025-${id}.pdf`;
    const doiLink = `./cyberleninka/article${id}.html`;
    const doiUrl = `https://doi.org/10.24412/1932-2321-2025-284-${pageRange}`;

    return `
      <!-- Статья #${id} -->
      <tr>
          <td height="20" width="871" style="height:15pt;width:653pt;text-align:left;vertical-align:top;white-space:normal;color:black;font-size:11pt;font-weight:400;font-family:Calibri,sans-serif;border:none;padding:1px;">
              <p style="margin:0">
                  <b class="title-of-article">
                      <font size="4" face="Arial">${title}</font>
                  </b>
              </p>
          </td>
          <td width="64" style="width:48pt;text-align:left;vertical-align:top;color:black;font-size:11pt;font-family:Calibri,sans-serif;white-space:nowrap;border:none;padding:1px;">
              <p style="margin:0">
                  <font class="font-pages" face="Arial" size="2">${pageRange}</font>
              </p>
          </td>
      </tr>
      <tr>
          <td height="20" width="871" style="height:15pt;width:653pt;text-align:left;vertical-align:top;border:none;padding:1px;">
              <p style="margin:0">&nbsp;</p>
          </td>
          <td style="border:none;padding:1px;">
              <p style="margin:0">&nbsp;</p>
          </td>
      </tr>
      <tr>
          <td height="20" width="871" style="height:15pt;width:653pt;text-align:left;vertical-align:top;white-space:normal;color:black;font-size:11pt;font-family:Calibri,sans-serif;border:none;padding:1px;">
              <p style="margin:0">
                  <font class="author-of-title" face="Arial" size="2">${authorsString}</font>
              </p>
          </td>
          <td style="border:none;padding:1px;">
              <p style="margin:0">&nbsp;</p>
          </td>
      </tr>
      <tr>
          <td width="871" style="height:19px;width:653pt;border:none;padding:1px;">
              <p style="margin:0">&nbsp;</p>
          </td>
          <td style="border:none;padding:1px;" height="19">
              <p style="margin:0">&nbsp;</p>
          </td>
      </tr>
      <tr>
          <td width="871" style="height:221px;width:653pt;text-align:left;vertical-align:top;white-space:normal;color:black;font-size:11pt;font-family:Calibri,sans-serif;border:none;padding:1px;">
              <p style="margin:0">
                  <font class="text-of-article" face="Arial" size="2">${text}</font>
              </p>
              <p style="margin:0">
                  <font face="PT Astra Serif" size="2">
                      <a class="link-of-article" href="${pdfLink}">
                          <img border="0" src="./2025_2_files/2021-06-04_142534.jpg" width="80" height="39">
                      </a>
                  </font>
              </p>
          </td>
          <td style="border:none;padding:1px;" height="221">
              <p style="margin:0">&nbsp;</p>
          </td>
      </tr>
      <tr>
          <td height="40" width="871" style="height:30pt;width:653pt;text-align:left;vertical-align:top;white-space:normal;color:black;font-size:11pt;font-family:Calibri,sans-serif;border:none;padding:1px;">
              <p style="margin:0">
                  <font class="data-of-the-article" face="Arial" size="2">
                      Cite: ${authorsString}&nbsp;&nbsp; ${title}. Reliability: Theory &amp; Applications. 2025, June 2(85):&nbsp;${pageRange}, DOI:&nbsp;<a class="page-link-of" href="${doiLink}">${doiUrl}</a>
                  </font>
              </p>
              <hr color="#1E6292" size="1">
          </td>
          <td style="border:none;padding:1px;">
              <p style="margin:0">&nbsp;</p>
          </td>
      </tr>
      <tr>
          <td width="871" style="height:21px;width:653pt;border:none;padding:1px;">
              <p style="margin:0">&nbsp;</p>
          </td>
          <td style="border:none;padding:1px;">
              <p style="margin:0">&nbsp;</p>
          </td>
      </tr>
  `;
}

/**
 * Рендерит все статьи в контейнер
 */
function renderAllArticles() {
    const container = document.getElementById("continieThisShPl");

    if (!container) {
        console.error("Контейнер #continieThisShPl не найден!");
        return;
    }

    let allHTML = "";

    articlesData.forEach((article) => {
        allHTML += generateArticleHTML(article);
    });

    container.innerHTML = allHTML;

    console.log(`✅ Загружено ${articlesData.length} статей`);
}

// Запуск при загрузке страницы
document.addEventListener("DOMContentLoaded", renderAllArticles);
